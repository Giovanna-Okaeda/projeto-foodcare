import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Users, MapPin, Package, 
  Settings, Bell, Leaf, Calendar, 
  Plus, Edit2, Trash2, CheckCircle, RefreshCcw, Search, X, History, Truck, ClipboardList, AlertTriangle, ArrowDownRight
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// --- CONFIGURAÇÃO DO MAPA ---
const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41], iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const iconCaminhao = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1048/1048329.png',
    iconSize: [30, 30], iconAnchor: [15, 15]
});

// --- DADOS FIXOS ---
const dataGrafico = [
  { name: 'Seg', kg: 60 }, { name: 'Ter', kg: 130 }, { name: 'Qua', kg: 80 },
  { name: 'Qui', kg: 115 }, { name: 'Sex', kg: 90 }, { name: 'Sáb', kg: 155 }, { name: 'Dom', kg: 95 },
];

const dadosPadrao = [
  { id: 1, nome: 'Mercado Silva', tipo: 'Comercial', contrato: '23/09/2022', status: 'Ativo', pontuacao: '8.5/10' },
  { id: 2, nome: 'ONG Arco-Íris', tipo: 'Social', contrato: '16/09/2022', status: 'Ativo', pontuacao: '8.5/10' },
  { id: 3, nome: 'Feira Vila Mariana', tipo: 'Comercial', contrato: '27/09/2022', status: 'Renovação', pontuacao: '8.5/10' },
];

const rotasVeiculos = [
  { id: 1, motorista: 'João Silva', veiculo: 'Caminhão 02', status: 'EM ROTA', cor: 'bg-green-100 text-green-700', destino: 'Mercado Silva -> CD-Centro', eta: '12 min', pos: [-23.5505, -46.6333] },
  { id: 2, motorista: 'Ana Souza', veiculo: 'Van 05', status: 'EM COLETA', cor: 'bg-orange-100 text-orange-700', destino: 'Feira Vila Mariana', eta: '-- min', pos: [-23.5855, -46.6422] },
];

// --- COMPONENTE DE CARD KPI ---
const KPICard = ({ title, value, trend, icon: Icon, color }) => {
  const colors = {
    green: 'bg-green-50 text-green-600 border-green-100',
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    orange: 'bg-orange-50 text-orange-600 border-orange-100',
    teal: 'bg-teal-50 text-teal-600 border-teal-100'
  };
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-start">
        <div className={`p-2 rounded-lg ${colors[color]}`}><Icon size={18}/></div>
        {trend && <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold not-italic">{trend}</span>}
      </div>
      <p className="text-xs text-gray-400 mt-2 font-black uppercase not-italic">{title}</p>
      <h3 className="text-lg font-black text-gray-800 not-italic">{value}</h3>
    </div>
  );
};

// --- PÁGINA: DASHBOARD ---
const DashboardPage = () => (
  <div className="space-y-6 animate-in fade-in duration-500 font-sans">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <KPICard title="Kg Resgatados (Mês)" value="1.240 kg" trend="↑ 12%" icon={Package} color="green" />
      <KPICard title="Famílias Atendidas" value="450" icon={Users} color="blue" />
      <KPICard title="Coletas Hoje" value="12 agendadas" icon={Calendar} color="orange" />
      <KPICard title="Emissões CO2 Evitadas" value="2.4 ton" icon={Leaf} color="teal" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 h-80 overflow-hidden relative z-0">
        <MapContainer center={[-23.5505, -46.6333]} zoom={12} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[-23.5505, -46.6333]}><Popup>Sede Central FoodCare</Popup></Marker>
        </MapContainer>
      </div>
      <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
        <h4 className="font-black text-sm mb-4 tracking-tighter uppercase not-italic">Atividades Recentes</h4>
        <div className="space-y-4 text-xs">
          <div className="border-l-2 border-orange-400 pl-3 py-0.5">
            <p className="font-black text-gray-700 not-italic uppercase">Mercado Silva solicitou coleta</p>
            <p className="text-[10px] text-gray-400 font-black not-italic">5 min atrás</p>
          </div>
          <div className="border-l-2 border-green-400 pl-3 py-0.5">
            <p className="font-black text-gray-700 not-italic uppercase">Caminhão 02 iniciou rota</p>
            <p className="text-[10px] text-gray-400 font-black not-italic">15 min atrás</p>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
      <div className="bg-white p-5 rounded-xl border border-gray-100 h-72 shadow-sm">
        <h4 className="font-black text-sm mb-4 tracking-tighter uppercase not-italic">Impacto Semanal (Kg)</h4>
        <ResponsiveContainer width="100%" height="80%">
          <LineChart data={dataGrafico}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" fontSize={10} axisLine={false} tick={{fontWeight: '900'}} />
            <YAxis fontSize={10} axisLine={false} tick={{fontWeight: '900'}} />
            <Tooltip />
            <Line type="monotone" dataKey="kg" stroke="#f97316" strokeWidth={3} dot={{ r: 4, fill: '#f97316' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-5 rounded-xl border border-gray-100 overflow-hidden shadow-sm">
        <h4 className="font-black text-sm mb-4 tracking-tighter uppercase not-italic">Inventário Atual</h4>
        <table className="w-full text-xs text-left">
          <thead>
            <tr className="text-gray-400 border-b">
              <th className="pb-3 font-black uppercase tracking-wider not-italic">Alimento</th>
              <th className="pb-3 font-black uppercase tracking-wider not-italic">Qtd</th>
              <th className="pb-3 font-black uppercase tracking-wider not-italic">Validade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-gray-600 font-black uppercase not-italic">
            <tr><td className="py-3">Arroz (Sacos)</td><td>500 kg</td><td>30 dias</td></tr>
            <tr className="bg-orange-50/50 text-orange-700 font-black"><td className="py-3 px-1">Frutas Mistas</td><td>120 kg</td><td>3 dias</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// --- PÁGINA: PONTO DE COLETA ---
const PontoDeColetaPage = () => (
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 animate-in fade-in duration-500 h-full">
    <div className="lg:col-span-1 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
      <div className="p-5 border-b border-gray-50">
        <h4 className="font-black text-gray-800 text-sm mb-4 uppercase tracking-tighter not-italic">Monitoramento</h4>
        <button className="w-full bg-orange-500 text-white text-xs font-black py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 uppercase not-italic">
          <Plus size={16}/> Designar Rota
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/30">
        {rotasVeiculos.map(v => (
          <div key={v.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-orange-200 transition-all">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-[10px] font-black border border-gray-200">{v.motorista[0]}</div>
                <div>
                  <p className="text-[11px] font-black text-gray-800 leading-none not-italic uppercase">{v.motorista}</p>
                  <p className="text-[9px] text-gray-400 font-black mt-1 not-italic uppercase">{v.veiculo}</p>
                </div>
              </div>
              <Truck size={14} className="text-gray-300" />
            </div>
            <div className="space-y-2 mt-3">
              <span className={`text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-tighter not-italic ${v.cor}`}>{v.status}</span>
              <p className="text-[9px] text-gray-500 font-black uppercase not-italic truncate">Destino: {v.destino}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="lg:col-span-3 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col overflow-hidden min-h-[500px]">
      <div className="p-4 border-b border-gray-50 bg-white z-10 flex justify-between items-center">
        <h4 className="font-black text-gray-800 text-sm uppercase tracking-tighter not-italic">Mapa Detalhado de Operações</h4>
        <div className="flex gap-4 text-[9px] font-black text-gray-400 uppercase tracking-widest not-italic">
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-orange-500"/> Coleta</span>
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"/> Entrega</span>
        </div>
      </div>
      <div className="flex-1 z-0">
        <MapContainer center={[-23.5505, -46.6333]} zoom={12} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
          {rotasVeiculos.map(v => (
            <Marker key={v.id} position={v.pos} icon={iconCaminhao}>
              <Popup><b>{v.veiculo}</b><br/>{v.motorista}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  </div>
);

// --- APP PRINCIPAL ---
export default function App() {
  const [pagina, setPagina] = useState('Dashboard');
  const [parceiros, setParceiros] = useState(() => {
    const salvo = localStorage.getItem('foodcare_parceiros');
    return salvo ? JSON.parse(salvo) : dadosPadrao;
  });

  const [inventario, setInventario] = useState([
    { id: 1, nome: 'Arroz T1 (Kg)', qtd: '2.3 Ton', origem: 'Mercado Silva', validade: '03/07/2023', status: 'Ativo' },
    { id: 2, nome: 'Feijão Carioca (Kg)', qtd: '1.1 Ton', origem: 'Feira Livre', validade: '03/07/2023', status: 'Vencendo' },
    { id: 3, nome: 'Leite UHT (L)', qtd: '850 L', origem: 'Mercado Popular', validade: '03/07/2023', status: 'Ativo' },
    { id: 4, nome: 'Frutas Sortidas (Kg)', qtd: '1.5 Ton', origem: 'Feira Central', validade: '03/07/2023', status: 'Vencendo' },
  ]);

  useEffect(() => {
    localStorage.setItem('foodcare_parceiros', JSON.stringify(parceiros));
  }, [parceiros]);

  const [modalAberto, setModalAberto] = useState(false);
  const [modalInventarioAberto, setModalInventarioAberto] = useState(false);
  const [editando, setEditando] = useState(null);
  const [form, setForm] = useState({ nome: '', tipo: 'Comercial', contrato: '' });
  const [formInv, setFormInv] = useState({ nome: '', qtd: '', origem: '', validade: '', status: 'Ativo' });

  const handleSalvar = (e) => {
    e.preventDefault();
    const novaLista = editando 
      ? [{ ...form, id: editando.id }, ...parceiros.filter(p => p.id !== editando.id)]
      : [{ ...form, id: Date.now(), contrato: form.contrato || new Date().toLocaleDateString('pt-BR') }, ...parceiros];
    setParceiros(novaLista);
    setModalAberto(false);
  };

  const handleSalvarInventario = (e) => {
    e.preventDefault();
    const novaLista = editando 
      ? inventario.map(item => item.id === editando.id ? { ...formInv, id: item.id } : item)
      : [{ ...formInv, id: Date.now() }, ...inventario];
    setInventario(novaLista);
    setModalInventarioAberto(false);
    setEditando(null);
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-gray-700 overflow-hidden">
      {/* SIDEBAR */}
<aside className="w-56 bg-[#1e293b] text-gray-400 p-4 flex flex-col shadow-xl">
  <div className="text-white text-2xl font-light px-2 mb-8 tracking-tight uppercase not-italic">FoodCare</div>
  <nav className="flex flex-col gap-1">
    {[
      { id: 'Dashboard', icon: LayoutDashboard },
      { id: 'Parceiros', icon: Users },
      { id: 'Ponto de Coleta', icon: MapPin },
      { id: 'Inventário', icon: ClipboardList }
    ].map(item => (
      <button 
        key={item.id}
        onClick={() => setPagina(item.id)} 
        className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-all not-italic ${pagina === item.id ? 'bg-gray-700 text-white shadow-sm' : 'hover:bg-gray-800'}`}
      >
        <item.icon size={16}/> 
        <span className="font-black text-[10px] uppercase tracking-widest">{item.id}</span>
      </button>
    ))}
  </nav>
</aside>

      {/* HEADER & MAIN */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b flex items-center justify-between px-8 z-20 shadow-sm">
          <div>
            <h2 className="text-lg font-black text-gray-800 uppercase tracking-tighter not-italic">Painel Admin</h2>
            <p className="text-[10px] text-orange-500 font-black uppercase tracking-widest leading-none mt-1 not-italic">{pagina}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-black text-gray-800 uppercase not-italic">Giovanna</p>
              <p className="text-[9px] text-orange-500 font-black uppercase not-italic">Master</p>
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center font-black text-orange-500 border border-orange-500 not-italic">G</div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 bg-[#F8FAFC]">
          {pagina === 'Dashboard' && <DashboardPage />}
          {pagina === 'Ponto de Coleta' && <PontoDeColetaPage />}

          {pagina === 'Inventário' && (
            <div className="space-y-6 animate-in fade-in duration-500">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <KPICard title="Total em Estoque" value="8.5 Ton" icon={Package} color="blue" />
                <KPICard title="Vencendo Logo" value="350" trend="+5%" icon={AlertTriangle} color="orange" />
                <KPICard title="Saídas (7 dias)" value="1.2 Ton" icon={ArrowDownRight} color="green" />
              </div>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-5 flex justify-between items-center border-b border-gray-50">
                  <h4 className="font-black text-xs uppercase tracking-widest not-italic">Relação de Alimentos</h4>
                  <button onClick={() => { setEditando(null); setFormInv({nome:'', qtd:'', origem:'', validade:'', status:'Ativo'}); setModalInventarioAberto(true); }} className="bg-orange-500 text-white text-[10px] px-4 py-2 rounded-lg font-black uppercase tracking-widest flex items-center gap-2 not-italic">
                    <Plus size={14}/> Adicionar Alimento
                  </button>
                </div>
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-gray-400 text-[10px] uppercase font-black tracking-widest not-italic">
                    <tr><th className="px-6 py-4">Alimento</th><th className="px-6 py-4">Qtd</th><th className="px-6 py-4">Validade</th><th className="px-6 py-4 text-center">Ações</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {inventario.map(item => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                        <td className="px-6 py-4 font-black text-gray-700 text-xs not-italic uppercase">{item.nome}</td>
                        <td className="px-6 py-4 text-xs font-black text-gray-500 not-italic">{item.qtd}</td>
                        <td className="px-6 py-4">
                          <span className={`text-[10px] font-black uppercase not-italic ${item.status === 'Vencendo' ? 'text-orange-500' : 'text-green-500'}`}>{item.validade}</span>
                        </td>
                        <td className="px-6 py-4 flex justify-center gap-3 text-gray-300">
                          <Edit2 size={16} className="hover:text-blue-500 cursor-pointer" onClick={() => { setEditando(item); setFormInv(item); setModalInventarioAberto(true); }}/>
                          <Trash2 size={16} className="hover:text-red-500 cursor-pointer" onClick={() => setInventario(inventario.filter(x => x.id !== item.id))}/>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {pagina === 'Parceiros' && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
              <div className="lg:col-span-3 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-5 flex justify-between items-center bg-white border-b border-gray-50">
                  <h4 className="font-black text-gray-800 text-xs uppercase tracking-widest not-italic">Relação de Parceiros</h4>
                  <button onClick={() => { setEditando(null); setForm({nome:'', tipo:'Comercial', contrato:''}); setModalAberto(true); }} className="bg-orange-500 text-white text-[10px] px-4 py-2 rounded-lg font-black uppercase tracking-widest flex items-center gap-2 not-italic">
                    <Plus size={14}/> Novo
                  </button>
                </div>
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 text-gray-400 text-[10px] uppercase font-black tracking-widest not-italic">
                    <tr><th className="px-6 py-4">Parceiro</th><th className="px-6 py-4">Tipo</th><th className="px-6 py-4 text-center">Contrato</th><th className="px-6 py-4 text-center">Ações</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {parceiros.map(p => (
                      <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-black text-gray-700 text-xs not-italic uppercase tracking-tight">{p.nome}</td>
                        <td className="px-6 py-4 text-[10px] text-gray-400 font-black uppercase not-italic">{p.tipo}</td>
                        <td className="px-6 py-4 text-center text-[10px] font-black not-italic">{p.contrato}</td>
                        <td className="px-6 py-4 flex justify-center gap-4 text-gray-300">
                          <Edit2 size={16} className="hover:text-blue-500 cursor-pointer" onClick={() => { setEditando(p); setForm(p); setModalAberto(true); }}/>
                          <Trash2 size={16} className="hover:text-red-500 cursor-pointer" onClick={() => setParceiros(parceiros.filter(x => x.id !== p.id))}/>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* MODAL PARCEIROS */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]">
          <div className="bg-white rounded-2xl p-6 w-96 shadow-2xl border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black text-gray-800 uppercase tracking-tighter not-italic">{editando ? 'Editar' : 'Novo'} Parceiro</h3>
              <X className="cursor-pointer text-gray-300 hover:text-red-500" onClick={() => setModalAberto(false)}/>
            </div>
            <form onSubmit={handleSalvar} className="space-y-4">
              <input required className="w-full border border-gray-100 bg-gray-50 rounded-lg p-3 text-xs font-black uppercase outline-none not-italic" placeholder="NOME DO PARCEIRO" value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} />
              <select className="w-full border border-gray-100 bg-gray-50 rounded-lg p-3 text-xs font-black uppercase outline-none not-italic" value={form.tipo} onChange={e => setForm({...form, tipo: e.target.value})}>
                <option value="Comercial">COMERCIAL</option><option value="Social">SOCIAL</option>
              </select>
              <button type="submit" className="w-full bg-orange-500 text-white font-black py-3 rounded-lg uppercase text-[10px] not-italic">Confirmar</button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL INVENTÁRIO */}
      {modalInventarioAberto && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]">
          <div className="bg-white rounded-2xl p-6 w-96 shadow-2xl border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black text-gray-800 uppercase tracking-tighter not-italic">{editando ? 'Editar' : 'Novo'} Alimento</h3>
              <X className="cursor-pointer text-gray-300 hover:text-red-500" onClick={() => setModalInventarioAberto(false)}/>
            </div>
            <form onSubmit={handleSalvarInventario} className="space-y-4">
              <input required className="w-full border border-gray-100 bg-gray-50 rounded-lg p-3 text-xs font-black uppercase outline-none not-italic" placeholder="NOME (EX: ARROZ)" value={formInv.nome} onChange={e => setFormInv({...formInv, nome: e.target.value})} />
              <input required className="w-full border border-gray-100 bg-gray-50 rounded-lg p-3 text-xs font-black uppercase outline-none not-italic" placeholder="QTD (EX: 500 KG)" value={formInv.qtd} onChange={e => setFormInv({...formInv, qtd: e.target.value})} />
              <input required className="w-full border border-gray-100 bg-gray-50 rounded-lg p-3 text-xs font-black uppercase outline-none not-italic" placeholder="VALIDADE (DD/MM/AAAA)" value={formInv.validade} onChange={e => setFormInv({...formInv, validade: e.target.value})} />
              <button type="submit" className="w-full bg-orange-500 text-white font-black py-3 rounded-lg uppercase text-[10px] not-italic">Salvar Estoque</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
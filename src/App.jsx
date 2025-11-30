import React, { useState, useMemo } from 'react';
import { Download } from 'lucide-react';

const QuoteCalculator = () => {
  const [selectedItems, setSelectedItems] = useState({});
  
  const modules = [
    {
      category: "BASE DEL SISTEMA",
      description: "Base fundamental del proyecto",
      items: [
        { name: "Autenticación y autorización (JWT)", price: 3000 },
        { name: "Documentación de API", price: 2000 },
        { name: "Diseño responsivo", price: 5000 },
        { name: "Página Home/Landing", price: 3000 },
        { name: "Catálogo de productos", price: 3500 },
        { name: "Detalle de producto", price: 2500 },
        { name: "Carrito de compras", price: 3000 },
        { name: "Página de confirmación", price: 1500 },
        { name: "Panel de administración básico", price: 4000 }
      ],
      total: { min: 25000, max: 35000 }
    },
    {
      category: "Gestión de Productos",
      items: [
        { name: "CRUD completo de productos", price: 2000 },
        { name: "Categorías y subcategorías", price: 1500 },
        { name: "Imágenes múltiples por producto", price: 1500 },
        { name: "Sistema de búsqueda", price: 2000 },
        { name: "Filtros básicos", price: 1500 },
      ],
      total: { min: 4000, max: 6000 }
    },
    {
      category: "Sistema de Usuarios",
      items: [
        { name: "Registro y login", price: 2000 },
        { name: "Recuperación de contraseña", price: 1500 },
        { name: "Perfil de usuario", price: 1500 },
        { name: "Historial de pedidos", price: 2000 },
        { name: "Direcciones guardadas", price: 1500 },
        { name: "Lista de deseos/favoritos", price: 1500 }
      ],
      total: { min: 5000, max: 8000 }
    },
    {
      category: "Carrito y Checkout Avanzado",
      items: [
        { name: "Carrito persistente (cookies/localStorage + DB)", price: 2000 },
        { name: "Aplicación de descuentos", price: 1500 },
        { name: "Validación de stock en tiempo real", price: 2000 },
        { name: "Proceso de checkout paso a paso", price: 2500 },
        { name: "Confirmación por email", price: 1500 }
      ],
      total: { min: 6000, max: 9000 }
    },
    {
      category: "Sistema de Pagos - Mercado Pago",
      items: [
        { name: "Integración API Mercado Pago", price: 3000 },
        { name: "Webhooks para confirmación", price: 1500 },
        { name: "Manejo de pagos fallidos", price: 1000 },
        { name: "Sistema de reembolsos", price: 1500 }
      ],
      total: { min: 5000, max: 7000 }
    },
    {
      category: "Sistema de Pagos - PayPal",
      items: [
        { name: "Integración API PayPal", price: 2500 },
        { name: "Webhooks para confirmación", price: 1500 },
        { name: "Manejo de pagos fallidos", price: 1000 },
        { name: "Sistema de reembolsos", price: 1500 }
      ],
      total: { min: 4000, max: 6000 }
    },
    {
      category: "Gestión de Inventario",
      items: [
        { name: "Control de stock en tiempo real", price: 2500 },
        { name: "Alertas de bajo inventario", price: 1500 },
        { name: "Historial de movimientos", price: 2000 },
        { name: "Ajustes manuales de inventario", price: 1500 },
        { name: "Reserva temporal en checkout", price: 2000 },
        { name: "Dashboard de inventario", price: 2000 }
      ],
      total: { min: 5000, max: 9000 }
    },
    {
      category: "Sistema de Envíos (checar)",
      items: [
        { name: "Cálculo por zonas/peso", price: 2000 },
        { name: "Integración con APIs de paquetería", price: 2500 },
        { name: "Tracking de pedidos", price: 1500 },
        { name: "Estimación de tiempos de entrega", price: 1000 },
        { name: "Generación de guías", price: 2000 },
        { name: "Notificaciones de envío", price: 1500 }
      ],
      total: { min: 5000, max: 8000 }
    },
    {
      category: "Panel de Administración Completo",
      items: [
        { name: "Dashboard con métricas", price: 3000 },
        { name: "Gestión de pedidos (estados, tracking)", price: 2500 },
        { name: "Gestión de clientes", price: 2000 },
        { name: "Reportes de ventas", price: 2500 },
        { name: "Gestión de contenido", price: 2000 },
        { name: "Configuración del sitio", price: 1500 },
        { name: "Exportación de datos", price: 1500 },
        { name: "Logs de actividad", price: 1500 }
      ],
      total: { min: 8000, max: 15000 }
    },
    {
      category: "Sistema de Cupones/Descuentos",
      items: [
        { name: "Códigos de descuento", price: 1500 },
        { name: "Descuentos por porcentaje o monto fijo", price: 1000 },
        { name: "Validación de uso único/múltiple", price: 1000 },
        { name: "Fecha de vigencia", price: 800 },
        { name: "Aplicación automática", price: 1200 }
      ],
      total: { min: 3000, max: 5000 }
    },
    {
      category: "Emails Transaccionales",
      items: [
        { name: "Confirmación de registro", price: 800 },
        { name: "Confirmación de pedido", price: 1000 },
        { name: "Actualización de estado", price: 1000 },
        { name: "Recuperación de contraseña", price: 800 },
        { name: "Templates personalizados", price: 1500 },
        { name: "Sistema de colas para envío", price: 1500 }
      ],
      total: { min: 3000, max: 5000 }
    },
    {
      category: "Sistema de Reseñas",
      items: [
        { name: "Calificaciones por estrellas", price: 1500 },
        { name: "Comentarios de clientes", price: 1500 },
        { name: "Moderación de reseñas", price: 1000 },
        { name: "Respuestas de administrador", price: 1000 },
        { name: "Media de calificaciones", price: 1000 }
      ],
      total: { min: 3000, max: 5000 }
    },
    {
      category: "Productos",
      items: [
        { name: "CRUD para artículos", price: 2000 },
        { name: "Categorías de productos", price: 1000 },
        { name: "Comentarios", price: 1500 },
      ],
      total: { min: 4000, max: 6000 }
    },
    {
      category: "Facturación Electrónica",
      items: [
        { name: "Integración con PAC (Facturama/Finkok)", price: 4000 },
        { name: "Generación de CFDI", price: 2500 },
        { name: "Descarga de XML/PDF", price: 1500 },
        { name: "Validación de RFC", price: 1500 },
        { name: "Almacenamiento de facturas", price: 2000 }
      ],
      total: { min: 6000, max: 12000 }
    },
    {
      category: "Analytics e Informes",
      items: [
        { name: "Dashboard de ventas", price: 2000 },
        { name: "Productos más vendidos", price: 1500 },
        { name: "Análisis de clientes", price: 1500 },
        { name: "Reportes personalizados", price: 2000 },
        { name: "Exportación a Excel/CSV", price: 1000 },
        { name: "Gráficas y visualizaciones", price: 2000 }
      ],
      total: { min: 4000, max: 7000 }
    },
    {
      category: "Otros",
      items: [
        { name: "Dominio .com o .mx (anual)", price: 500}
      ],
      total: { min: 4000, max: 7000 }
    }
  ];

  const packages = [
    {
      name: "PAQUETE INICIO",
      price: 40000,
      includes: [
        "CORE DEL SISTEMA",
        "Gestión de Productos",
        "Carrito y Checkout Avanzado",
        "Sistema de Pagos - Mercado Pago",
        "Emails Transaccionales"
      ]
    },
    {
      name: "PAQUETE PROFESIONAL",
      price: 60000,
      includes: [
        "CORE DEL SISTEMA",
        "Gestión de Productos",
        "Sistema de Usuarios",
        "Carrito y Checkout Avanzado",
        "Sistema de Pagos - Mercado Pago",
        "Sistema de Pagos - Stripe",
        "Gestión de Inventario",
        "Sistema de Envíos",
        "Panel de Administración Completo",
        "Sistema de Cupones/Descuentos",
        "Emails Transaccionales",
        "SEO y Performance"
      ]
    },
    {
      name: "PAQUETE ESCALABLE",
      price: 85000,
      includes: [
        "CORE DEL SISTEMA",
        "Gestión de Productos",
        "Sistema de Usuarios",
        "Carrito y Checkout Avanzado",
        "Sistema de Pagos - Mercado Pago",
        "Sistema de Pagos - Stripe",
        "Gestión de Inventario",
        "Sistema de Envíos",
        "Panel de Administración Completo",
        "Sistema de Cupones/Descuentos",
        "Emails Transaccionales",
        "SEO y Performance",
        "Sistema de Reseñas",
        "Blog/Contenido",
        "Facturación Electrónica (México)",
        "Analytics e Informes",
        "Email Marketing y Notificaciones",
        "Campos Personalizados para Alimentos"
      ]
    }
  ];

  const toggleItem = (category, itemName) => {
    const key = `${category}-${itemName}`;
    setSelectedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleCategory = (category) => {
    const module = modules.find(m => m.category === category);
    const allSelected = module.items.every(item => 
      selectedItems[`${category}-${item.name}`]
    );
    
    const newSelection = { ...selectedItems };
    module.items.forEach(item => {
      newSelection[`${category}-${item.name}`] = !allSelected;
    });
    setSelectedItems(newSelection);
  };

  const calculateTotal = useMemo(() => {
    return Object.entries(selectedItems).reduce((sum, [key, selected]) => {
      if (!selected) return sum;
      const [category, ...itemNameParts] = key.split('-');
      const itemName = itemNameParts.join('-');
      const module = modules.find(m => m.category === category);
      const item = module?.items.find(i => i.name === itemName);
      return sum + (item?.price || 0);
    }, 0);
  }, [selectedItems]);

  const downloadCSV = () => {
    let csv = 'Categoría,Funcionalidad,Precio (MXN),Seleccionado\n';
    
    modules.forEach(module => {
      csv += `\n"${module.category}","","${module.total.min} - ${module.total.max}",""\n`;
      module.items.forEach(item => {
        const key = `${module.category}-${item.name}`;
        const selected = selectedItems[key] ? 'Sí' : 'No';
        csv += `"","${item.name}","${selected}"\n`;
      });
    });
    
    csv += `\n\nTOTAL PERSONALIZADO SELECCIONADO,${calculateTotal}\n`;
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'cotizacion_tienda_online.csv';
    link.click();
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Cotizador de tienda online
            </h1>
          </div>
          <button
            onClick={downloadCSV}
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            <Download size={20} />
            Descargar CSV
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Cotización Personalizada por Módulo
          </h2>
          
          {modules.map((module, moduleIdx) => (
            <div key={moduleIdx} className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 cursor-pointer hover:from-blue-700 hover:to-blue-800 transition-colors"
                onClick={() => toggleCategory(module.category)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold">{module.category}</h3>
                    {module.description && (
                      <p className="text-blue-100 text-sm mt-1">{module.description}</p>
                    )}
                  </div>
                  <div className="text-right">
                    {/* <p className="text-2xl font-bold"> */}
                    {/*   ${module.total.min.toLocaleString('es-MX')} - ${module.total.max.toLocaleString('es-MX')} */}
                    {/* </p> */}
                    <p className="text-blue-100 text-sm">seleccionar todo</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white">
                {module.items.map((item, itemIdx) => {
                  const key = `${module.category}-${item.name}`;
                  const isSelected = selectedItems[key];
                  
                  return (
                    <div
                      key={itemIdx}
                      className={`flex justify-between items-center p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                        isSelected ? 'bg-blue-50' : ''
                      }`}
                      onClick={() => toggleItem(module.category, item.name)}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isSelected || false}
                          onChange={() => {}}
                          className="w-5 h-5 text-blue-600 rounded cursor-pointer"
                        />
                        <span className={`${isSelected ? 'font-semibold text-blue-900' : 'text-gray-700'}`}>
                          {item.name}
                        </span>
                      </div>
                      <span className={`font-bold ${isSelected ? 'text-blue-600' : 'text-gray-600'}`}>
                        ${item.price.toLocaleString('es-MX')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-500 rounded-lg p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Total
              </h3>
              <p className="text-gray-600">
                {Object.values(selectedItems).filter(Boolean).length} funcionalidades
              </p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold text-green-600">
                ${calculateTotal.toLocaleString('es-MX')} MXN
              </p>
              <p className="text-sm text-gray-600 mt-1">+ IVA si aplica</p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-bold text-yellow-900 mb-2">Tiempo estimado</h4>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>Hasta $40,000: 6-8 semanas</li>
              <li>$40,000 - $70,000: 8-12 semanas</li>
              <li>Más de $70,000: 12-16 semanas</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <h4 className="font-bold text-purple-900 mb-2">Forma de Pago</h4>
            <ul className="text-sm text-purple-800 space-y-1">
              <li>Anticipo: 20%</li>
              <li>Avance backend: 40%</li>
              <li>Avance frontend: 40%</li>
              <li>Final: 10%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCalculator;

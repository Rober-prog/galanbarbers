/**
 * Configuración para integración de Chatbot de Reservas
 * 
 * Este archivo contiene la configuración base para integrar
 * un agente/chatbot de reservas en la web de Galán Barbers.
 * 
 * NOTA: Este archivo está preparado pero NO activo.
 * Para activar el chatbot, descomenta las secciones correspondientes
 * en src/components/FloatingCTA.astro
 */

export interface ChatbotConfig {
  // Endpoint de la API del chatbot
  apiEndpoint: string;
  
  // Keys de autenticación
  apiKey: string;
  
  // ID del negocio/tenant
  businessId: string;
  
  // Configuración de apariencia
  theme: {
    primaryColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
  };
  
  // Callbacks de eventos
  events: {
    onOpen?: () => void;
    onClose?: () => void;
    onBookingConfirmed?: (bookingData: BookingData) => void;
    onError?: (error: Error) => void;
  };
}

export interface BookingData {
  barberId: string;
  barberName: string;
  service: string;
  date: string;
  time: string;
  customerName: string;
  customerPhone: string;
}

/**
 * Configuración por defecto del chatbot
 * Reemplazar con valores reales en producción
 */
export const chatbotConfig: ChatbotConfig = {
  // TODO: Reemplazar con endpoint real
  apiEndpoint: 'https://api.tu-chatbot.com/v1/chat',
  
  // TODO: Usar variables de entorno - import.meta.env.PUBLIC_CHATBOT_API_KEY
  apiKey: '',
  
  businessId: 'galan-barbers',
  
  theme: {
    primaryColor: '#c06b53',
    accentColor: '#f2ae74',
    backgroundColor: '#111111',
    textColor: '#fafafa',
  },
  
  events: {
    onOpen: () => {
      console.log('[Chatbot] Abierto');
      // Aquí puedes añadir tracking/analytics
    },
    
    onClose: () => {
      console.log('[Chatbot] Cerrado');
    },
    
    onBookingConfirmed: (bookingData: BookingData) => {
      console.log('[Chatbot] Reserva confirmada:', bookingData);
      // Aquí puedes:
      // - Enviar a analytics
      // - Mostrar confirmación al usuario
      // - Actualizar el estado de la UI
    },
    
    onError: (error: Error) => {
      console.error('[Chatbot] Error:', error);
      // Manejar errores (mostrar mensaje, retry, etc.)
    }
  }
};

/**
 * Función de inicialización del chatbot
 * Llama a esta función cuando el DOM esté listo
 */
export function initChatbot(): void {
  // Verificar que la librería del chatbot esté cargada
  if (typeof window !== 'undefined' && (window as any).BookingChatbot) {
    (window as any).BookingChatbot.init(chatbotConfig);
  } else {
    console.warn('[Chatbot] La librería del chatbot no está disponible');
  }
}

/**
 * Ejemplo de uso en un componente Astro:
 * 
 * <script>
 *   import { initChatbot } from '../config/chatbot.config';
 *   
 *   // Inicializar cuando el DOM esté listo
 *   document.addEventListener('DOMContentLoaded', initChatbot);
 * </script>
 * 
 * Ejemplo de contenedor HTML:
 * 
 * <div id="chatbot-container" class="fixed bottom-24 right-6 z-40 w-80 h-96">
 *   <div id="chatbot-mount-point" class="w-full h-full bg-brand-dark rounded-lg shadow-xl">
 *     <!-- El chatbot se montará aquí -->
 *   </div>
 * </div>
 */

export default function Construccion() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/img/logo.png" 
            alt="Logo" 
            className="w-24 h-24 mx-auto mb-6 rounded-full shadow-2xl"
          />
        </div>

        {/* Título principal */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          En Construcción
        </h1>

        <h2 className="text-xl md:text-2xl text-blue-200 mb-8">
          Estamos trabajando en algo increíble
        </h2>

        {/* Descripción */}
        <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Estamos construyendo una experiencia web excepcional para ti. 
          Muy pronto podrás disfrutar de todas las funcionalidades que estamos preparando.
        </p>

        {/* Información de contacto */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-white mb-4">
            ¿Tienes alguna pregunta?
          </h3>
          <p className="text-blue-200 mb-4">
            Contáctanos en{' '}
            <a href="mailto:contacto@elpotegomez.com" className="text-white hover:underline">
              info@ejemplo.com
            </a>
          </p>
        </div>

        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}

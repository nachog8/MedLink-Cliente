export default function Hero() {
    return (
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Tenemos una amplia infraestructura de servicios médicos internos.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                La mejor calidad de Sanatorios en Argentina, preparados para cuidarte.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="Medical Care"
                className="rounded-lg object-cover w-full h-full shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
const posts = [
    {
      id: 1,
      title: '10 días de prueba',
      href: '#',
      description:
        'Tenes 10 días para probar el vehículo. Si no te convence por alguna razón, te reembolsamos el 100% del valor.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'src/assets/img/servicio/garantia.jpg',
      },
    },
    {
        id: 2,
        title: 'Garantía mecanica',
        href: '#',
        description:
          'Té damos 3 meses de garantía mecánica con nuestros especialistas, en caso de que tu vehículo tenga algún inconveniente.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'src/assets/img/servicio/manejando.jpg',
        },
      },
      {
        id: 3,
        title: 'Opciones de pago',
        href: '#',
        description:
          'Ofrecemos distintas modalidades de pago para brindarte total tranquilidad. Consulta en nuestros canales de comunicacion acerca de ellos',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'src/assets/img/servicio/financiamiento.webp',
        },
      },
      
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl items-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">¿Por qué deberías elegirnos?</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 text-center">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <img className="w-full rounded-lg object-cover object-center" src={post.author.imageUrl} alt={post.title} />

                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>

              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
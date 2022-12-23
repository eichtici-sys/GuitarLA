import imagen from "../../public/img/nosotros.jpg";
import stylesNostros from '~/styles/nosotros.css'

export function links(){
  return [
    {
      rel:'stylesheet',
      href: stylesNostros
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>Duis tincidunt diam quis orci gravida, a congue nulla sodales. Aenean molestie neque nec condimentum dapibus. Donec vulputate tortor neque, et dignissim lectus scelerisque eu. Proin nunc libero, ultrices eget mauris et, fringilla aliquet velit. Phasellus gravida lacus sed quam finibus, et ultricies justo efficitur. Aenean in fermentum dolor. Curabitur quam libero, accumsan in finibus ac, malesuada at metus. Praesent egestas urna vel erat rutrum, non imperdiet metus viverra. Suspendisse ut tellus suscipit, hendrerit lectus sit amet, dictum ante. Nulla dapibus hendrerit fermentum. In hac habitasse platea dictumst. Curabitur congue pharetra quam sed viverra. Sed sit amet lacus mauris. Maecenas massa nisi, maximus vitae porttitor a, imperdiet vel nisi. Vivamus eu nunc ornare, tristique elit at, euismod ligula.</p>
          <p>Duis tincidunt diam quis orci gravida, a congue nulla sodales. Aenean molestie neque nec condimentum dapibus. Donec vulputate tortor neque, et dignissim lectus scelerisque eu. Proin nunc libero, ultrices eget mauris et, fringilla aliquet velit. Phasellus gravida lacus sed quam finibus, et ultricies justo efficitur. Aenean in fermentum dolor. Curabitur quam libero, accumsan in finibus ac, malesuada at metus. Praesent egestas urna vel erat rutrum, non imperdiet metus viverra. Suspendisse ut tellus suscipit, hendrerit lectus sit amet, dictum ante. Nulla dapibus hendrerit fermentum. In hac habitasse platea dictumst. Curabitur congue pharetra quam sed viverra. Sed sit amet lacus mauris. Maecenas massa nisi, maximus vitae porttitor a, imperdiet vel nisi. Vivamus eu nunc ornare, tristique elit at, euismod ligula.</p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;

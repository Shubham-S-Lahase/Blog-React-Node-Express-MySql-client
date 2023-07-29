import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/3932410/pexels-photo-3932410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/4157474/pexels-photo-4157474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>Lolita</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={require("../img/edit.webp")} alt="" />
            </Link>
            <img src={require("../img/delete.jpg")} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis
          nisl rhoncus mattis rhoncus urna. Tincidunt ornare massa eget egestas
          purus viverra accumsan in nisl. Quis auctor elit sed vulputate mi sit.
          Eu non diam phasellus vestibulum lorem. Vel facilisis volutpat est
          velit egestas dui id. Orci porta non pulvinar neque laoreet
          suspendisse interdum consectetur. Ultricies lacus sed turpis tincidunt
          id aliquet risus feugiat. Dui ut ornare lectus sit amet est placerat
          in egestas. Elit sed vulputate mi sit amet mauris commodo.
          <br />
          Sollicitudin nibh sit amet commodo nulla facilisi nullam. Vel orci
          porta non pulvinar neque laoreet suspendisse. Nunc vel risus commodo
          viverra maecenas accumsan lacus vel. Sit amet tellus cras adipiscing
          enim eu turpis. Natoque penatibus et magnis dis parturient montes
          nascetur ridiculus. Lobortis mattis aliquam faucibus purus in massa
          tempor. Massa tincidunt nunc pulvinar sapien. Tellus in hac habitasse
          platea dictumst vestibulum rhoncus. Viverra nibh cras pulvinar mattis.
          Sociis natoque penatibus et magnis. Pellentesque dignissim enim sit
          amet venenatis urna cursus eget nunc. Morbi enim nunc faucibus a.
          Vitae aliquet nec ullamcorper sit amet risus nullam eget felis.
          <br />
          Nulla at volutpat diam ut venenatis tellus in metus. Ultrices mi
          tempus imperdiet nulla malesuada. Enim tortor at auctor urna nunc id
          cursus. Enim sed faucibus turpis in eu mi. Pretium lectus quam id leo
          in vitae. Congue eu consequat ac felis. Congue eu consequat ac felis
          donec et odio pellentesque diam. Leo duis ut diam quam. Velit ut
          tortor pretium viverra suspendisse. Nulla facilisi cras fermentum odio
          eu feugiat pretium nibh ipsum. Ut enim blandit volutpat maecenas.
          Neque convallis a cras semper auctor. Elit sed vulputate mi sit amet.
          Duis ultricies lacus sed turpis tincidunt. Magna eget est lorem ipsum
          dolor. Ultrices sagittis orci a scelerisque. Imperdiet sed euismod
          nisi porta lorem mollis aliquam. Proin libero nunc consequat interdum
          varius sit amet mattis. Rhoncus dolor purus non enim praesent. Urna
          duis convallis convallis tellus id interdum. Nulla facilisi etiam
          dignissim diam quis. Pellentesque elit eget gravida cum sociis natoque
          penatibus et magnis. In hac habitasse platea dictumst quisque sagittis
          purus. Augue ut lectus arcu bibendum at varius vel pharetra vel. Arcu
          cursus euismod quis viverra nibh cras pulvinar mattis. Integer
          malesuada nunc vel risus commodo viverra. Dui nunc mattis enim ut
          tellus elementum sagittis vitae et. Viverra vitae congue eu consequat
          ac. Enim nec dui nunc mattis enim ut. Amet aliquam id diam maecenas
          ultricies mi eget mauris pharetra. In arcu cursus euismod quis viverra
          nibh. Suspendisse sed nisi lacus sed viverra tellus. Diam sollicitudin
          tempor id eu nisl nunc mi ipsum. Aliquam purus sit amet luctus
          venenatis lectus magna fringilla urna. In fermentum posuere urna nec
          tincidunt praesent semper feugiat. Ut enim blandit volutpat maecenas
          volutpat.
          <br />
          Consequat semper viverra nam libero justo laoreet. Ligula ullamcorper
          malesuada proin libero nunc consequat interdum varius. Ac tortor vitae
          purus faucibus ornare suspendisse sed nisi. Quisque non tellus orci ac
          auctor. Sit amet justo donec enim diam. Quis blandit turpis cursus in
          hac habitasse platea dictumst quisque. Nunc sed blandit libero
          volutpat. Quam nulla porttitor massa id neque aliquam vestibulum
          morbi. Dignissim cras tincidunt lobortis feugiat. Libero nunc
          consequat interdum varius sit. In massa tempor nec feugiat nisl
          pretium fusce id velit. Ipsum consequat nisl vel pretium lectus quam
          id leo. Dui id ornare arcu odio ut. Sed velit dignissim sodales ut eu
          sem. Blandit volutpat maecenas volutpat blandit aliquam etiam erat
          velit. Velit euismod in pellentesque massa placerat duis ultricies.
          Enim neque volutpat ac tincidunt vitae semper. Id donec ultrices
          tincidunt arcu non sodales neque sodales. Adipiscing at in tellus
          integer feugiat. Volutpat maecenas volutpat blandit aliquam etiam. Et
          malesuada fames ac turpis egestas integer eget. Nisi vitae suscipit
          tellus mauris a diam. Volutpat diam ut venenatis tellus in metus
          vulputate eu. Mattis pellentesque id nibh tortor id aliquet lectus
          proin. Rhoncus aenean vel elit scelerisque mauris. Accumsan in nisl
          nisi scelerisque eu ultrices. Cursus vitae congue mauris rhoncus
          aenean vel elit scelerisque mauris. Convallis posuere morbi leo urna
          molestie at. Ac ut consequat semper viverra nam.
        </p>
      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>
  );
};

export default Single;

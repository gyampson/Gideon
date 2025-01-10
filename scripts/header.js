const headerHTML = `
 <header>
        <img class="logo" src="asset/logo.png">
        <div class="menu-bar">
            
            <ul id="#sidemenu">
                
              <li><a href="index.html">HOME</a></li>
              <li>
                <a href="services.html">SERVICES</a>
              </li>
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">KNOWLEDGE LIBRARY</a></li>
              <li><a href="contact.html">CONTACT US</a></li>
              <li><a href="login.html"> BLOG</a></li>
              <i class="fa-solid fa-xmark" onclick="closemenu()"></i>
            </ul>
          </div>
          <div class="left">
             <img class="menu" src="asset/Menu.png" alt="Image 1" onclick="openmenu()">
            <i class="fa-solid fa-bars" onclick="openmenu()" ></i>
        </div>
    </header>
`;
document.body.insertAdjacentHTML("afterbegin", headerHTML);
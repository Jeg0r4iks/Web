<template>
<div>
  <nav>
        <div class="hamburger-menu" @click="toggleMenu">
            <i class="fa-solid fa-bars"></i>
        </div>
        <ul class="nav-menu" :class="{ active: isMenuOpen }">
            <li><i class="fa-solid fa-house"></i><a href="#home">Home</a></li>
            <li><i class="fa-solid fa-circle-info"></i><a href="#about">About</a></li>
            <li><i class="fa-solid fa-address-book"></i><a href="#contact">Contacts</a></li>
            <li class="dropdown">
                <i class="fa-solid fa-gear"></i><a href="#services">Services</a>
                <ul class="dropdown-content">
                        <li><a href="laptops.html" target="_blank">Laptops</a></li>
                        <li><a href="phones.html" target="_blank">Phones</a></li>
                        <li><a href="equipment.html" target="_blank">Computer Equipment</a></li>                  
                </ul>
            </li>
            <li>
                <i class="fa-solid fa-moon"></i>
                <button @click="darkmode">{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</button>
            </li>           
        </ul>
    </nav>

    <div class="flex-container">
        <div> 
            <header> Apple MacBook Air (2024) </header>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ8Oe43Zme3n9RnMWs1S77mcZA-CxMkyc8Xg&s" alt="Dators">
            <button class="learn-more" @click="openModal('Macbook Details', 'M3 chip with 8-core CPU and 10-core GPU 8GB 512GB SSD')">Learn More</button>
        </div>
        <div> 
            <header> Apple iPhone 16 </header> 
            <img src="https://www.istudio.store/cdn/shop/files/iPhone_16_Pink_PDP_Image_Position_1a_Pink_Color__TH-TH_a0a5036d-ecf3-4216-a250-4f8739521d21.jpg?v=1725929916" alt="Viedtālrunis">
            <button class="learn-more" @click="openModal('iPhone Details', 'A18 Chip, 128 GB, Camera Control, powerful upgrades to the advanced camera system, the Action button')">Learn More</button>
        </div>
        <div> 
            <header> Apple Studio Display </header>
            <img src="https://www.euronics.lv/UserFiles/Products/Images/315147-474636-medium.png" alt="Monitors">
            <button class="learn-more" @click="openModal('Monitor Details', 'Display size 27 inch, 5120-by-2880 resolution at 218 pixels per inch 600 nits brightness')">Learn More</button>    
        </div>
    </div>

    <div v-show="isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>{{ modalTitle }}</h2>
        <p>{{ modalDescription }}</p>
    </div>
    </div>

    <footer> 
      <p>© 2024. All rights reserved.</p>
    </footer>
</div>
</template>

<script> 
  export default {
    data() {
      return {
        isDarkMode: false,
        isMenuOpen: false,
        isModalOpen: false,
        modalTitle: '',
        modalDescription: '',
      };
    },
    methods: {
      darkmode() {
        this.isDarkMode = !this.isDarkMode; 
        document.body.classList.toggle('dark-mode', this.isDarkMode);
      },
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      openModal(title, description) {  
        this.modalTitle = title;
        this.modalDescription = description;
        this.isModalOpen = true;
      }, 
      closeModal() {
        this.isModalOpen = false;
      },
    },
};
</script> 

<style scoped> 
body {
    background-color: rgb(250, 248, 239);
    font-family: Helvetica;
}

/*Navigācijas menu*/

nav {
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    background-color: rgb(250, 248, 239); 
    padding: 10px 20px; 
    width: 100%; 
    margin: 0; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}

.nav-menu {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 20px; 
    margin: 0; 
    padding: 0; 
    background-color: rgb(250, 248, 239); 
}

.nav-menu li {
    display: flex; 
    flex-direction: column; 
    align-items: center;
    margin: 0;
    background-color: rgb(250, 248, 239); 
}

.nav-menu li a {
    padding: 14px 16px;
    display: block; 
    color: rgb(77, 34, 44);
    text-decoration: none;
    text-align: center;
    transition: 0.5s;
}

.nav-menu li a:hover {
    font-weight: bold;
    background-color: rgba(242, 226, 206, 0.8);
    transition: 0.5s; 
}

.nav-menu button {
    padding: 10px 15px;
    background-color: rgb(250, 248, 239); 
    color: rgb(77, 34, 44);
    font-size: 15px;
    border: none;
    cursor: pointer;
    align-items: center;
}

.nav-menu button:hover {
    background-color: rgba(242, 226, 206, 0.8);
    font-weight: bold;
}


/*Dropdown menu*/

.dropdown {
    position: relative; 
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: rgb(250, 248, 239);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    width: 100px;
    z-index: 1;
    border-radius: 4px; 
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-content li a {
    text-align: left;
    text-decoration: none;
    color: rgb(77, 34, 44);
    display: block;
    transition: 0.3s;
}

.dropdown-content li a:hover {
    background-color: rgba(242, 226, 206, 0.8);
}

/*Dark-mode dropdown*/

.dark-mode .dropdown-content {
    background-color: rgba(43, 42, 42, 0.986); 
}

.dark-mode .dropdown-content li a {
    color: white; 
}

.dark-mode .dropdown-content li a:hover {
    background-color: rgba(100, 100, 100, 0.8); 
}

/*Kartītes*/

.flex-container {
    display: flex;
    justify-content: space-between;
}

.flex-container div {
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 
    align-items: center;
    text-align: center; 
    width: 400px; 
    height: 410px;
    margin: 30px;
    padding: 30px;
    font-size: 25px;
    color: rgb(77, 34, 44);
    border-radius: 2%;
    background-color: rgb(242, 226, 206);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); 
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;
}

.flex-container div header {
    font-weight: bold;
    text-align: center;
}

@keyframes scaleUp {
    0% {
        transform: scale(1); 
    }
    100% {
        transform: scale(1.1);
    }
}

.flex-container div img {
    max-width: 100%; 
    max-height: 200px;
    border-radius: 10%;
    justify-content: center;
    align-self: center; 
    margin: 10px 0;
    transition: transform 0.5s ease;
}

.flex-container div img:hover {
    animation: scaleUp 0.5s; 
}

.flex-container div button {
    height: 60px;
    width: 70px; 
    font-size: 20px;
    background-color: rgb(250, 248, 239);
    color: rgb(77, 34, 44); 
    border: none;
    border-radius: 10%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}

.flex-container div button:hover {
    font-size: 90%;
    font-weight: bold;
}

/*Dark mode*/

.dark-mode {
    background-color: rgba(43, 42, 42, 0.986);
    color:white;
}

.dark-mode nav {
    background-color: rgba(43, 42, 42, 0.986); 
    color: white;
}

.dark-mode .nav-menu {
    background-color: rgba(43, 42, 42, 0.986);
    color: white;
}

.dark-mode .nav-menu li {
    background-color: rgba(43, 42, 42, 0.986);
    color: white; 
}

.dark-mode .nav-menu li i {
    background-color: rgba(43, 42, 42, 0.986);
    color: white;
}

.dark-mode .nav-menu li a {
    background-color: rgba(43, 42, 42, 0.986);
    color: white;
}

.dark-mode .flex-container div {
    background-color: rgba(43, 42, 42, 0.986); 
    color: white; 
}

.dark-mode .flex-container div button {
    background-color: rgba(43, 42, 42, 0.986); 
    color: white; 
}

.dark-mode nav li button {
    background-color: rgba(43, 42, 42, 0.986); 
    color: white; 
}

/*Modal logs*/

.modal {
    position: fixed; 
    z-index: 9999; 
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;  
    background-color: rgba(0, 0, 0, 0.4); 
}

.modal-content {
    background-color: rgb(250, 248, 239);
    margin: 20% auto;
    padding: 20px;
    width: 80%; 
    border-radius: 4px; 
}

.close {
  color: black;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  cursor: pointer;
}

.dark-mode .modal-content {
    background-color: rgba(43, 42, 42, 0.986); 
    color: white; 
}


.dark-mode .modal .close {
    color: white; 
}

/*Hamburgera izvelne*/

.hamburger-menu {
    display: none;
    cursor: pointer;
}

.nav-menu.active {
  display: block;
}

@media screen and (max-width: 768px) {
    .nav-menu {
      display: none; 
      position: absolute;
      top: 60px; 
      left: 0; 
      width: 200px; 
      flex-direction: column; 
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      padding: 10px;
      z-index: 1000;  
    }

    .hamburger-menu {
      display: block;
    }
}

/*Footer*/

footer {
    color: rgb(77, 34, 44); 
    text-align: center;
    padding: 100px;
}

.dark-mode footer {
    color: white; 
} 
</style>
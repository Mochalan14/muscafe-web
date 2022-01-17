<template>
    <nav class="navbar navbar-expand-lg navbar-light p-4 ">
        <div class="container">
            <div class="navbar-brand">
                <h1>Muscafe</h1>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

        
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a href="#" class="nav-link btn btn-color-theme pl-3 pr-3">Pesan</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link btn btn-outline-theme pl-3 pr-3">Kunjungi</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import { TastyBurgerButton } from 'vue-tasty-burgers'

export default{
    name: 'NavBar',
    'tasty-burger-button': TastyBurgerButton,
}
</script>

<style>
.btn-color-theme{
    color: white !important;
    background-color: #4f000b;
}

.text-theme{
    color: #4f000b;
}

a:hover{
    color: #4f000b;
}

.border-radius-18{
    border-radius: 18px;
}

.btn-outline-theme{
    border: 1px solid #4f000b;
    color: #4f000b !important;
}

.btn-outline-theme:hover{
    background-color: #4f000b;
    border-color: #4f000b;
    color: white !important;
}

.navbar .navbar-nav li{
    font-size: 16px;
    padding-left: 15px;
}

@media(max-width:576px){
    *{
        text-align: center;
    }

    .navbar-collapse{
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .navbar-nav .btn-outline-theme{
        margin-top:10px;
    }

    .footer{
        text-align: center;
    }
}
</style>

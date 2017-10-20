(function(){
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController)

        homeController.$inject = [];

    function homeController() {
        /* jshint validthis:true */
        var vm = this;
        vm.send = send;


        vm.colaboradores = [{
            "id":"1",
            "contributor": "José Gabriel Pereira Telhado",
            "city": "Rio de Janeiro",
            "project": "PIS",
            "avatar": "",
            "careerfield": "UX/UI Designer",
            "contact":{
                "tel":"21 99353-1889",
                "email":"jose.telhado@mjv.com.br",
                "slack":"#GabrielTelhado",
                "skype":"jgtelhado"
            },
            "skills": {
                "graduation": {
                    "degree": "Desenho Industrial (Gama Filho)",
                    "master": "Marketing e Design Digital (ESPM)"
                },
                "experience": "10 anos de experiência em design.Desde de 2010 atuando na área digital, em diversos projetos: sites institucionais, responsivos, apps mobiles, ATM, e-commerce. Quase sempre participando de todo o fluxo de UI/UX: fluxograma, benchmark, paperframes, protótipos navegáveis, aplicação de card sorting, pesquisa quantitativa, interface.",
                "knowleges": {
                    "tools": "Axure, Invision, Figma, Sketch, Photoshop, Illustrator, Hotjar, CrazyEgg, Xmind",
                    "course": "",
                    "certification": ""
                }
            }
        },{
            "id":"2",
            "contributor": "Airton Cabral",
            "city": "Rio de Janeiro",
            "project": "PIS",
            "avatar": "",
            "careerfield": "Front-End Developer",
            "contact":[{
                "tel":"21 99353-1889",
                "email":"jose.telhado@mjv.com.br",
                "slack":"#GabrielTelhado",
                "skype":"jgtelhado"
            }],
            "skills": [{
                "graduation": [{
                    "degree": "Desenho Industrial (Gama Filho)",
                    "master": "Marketing e Design Digital (ESPM)"
                }],
                "experience": "10 anos de experiência em design.Desde de 2010 atuando na área digital, em diversos projetos: sites institucionais, responsivos, apps mobiles, ATM, e-commerce. Quase sempre participando de todo o fluxo de UI/UX: fluxograma, benchmark, paperframes, protótipos navegáveis, aplicação de card sorting, pesquisa quantitativa, interface.",
                "knowleges": [{
                    "tools": "Axure, Invision, Figma, Sketch, Photoshop, Illustrator, Hotjar, CrazyEgg, Xmind",
                    "course": "",
                    "certification": ""
                }]
            }]
        }]

        function send() {
            alert('Enviado!');
            console.log(vm.user);
            console.log(vm.colaboradores[0])
        }


        activate();

        function activate() { }
    }
})();
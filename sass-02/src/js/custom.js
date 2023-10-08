// instancia jquery e evita conflitos
// jQuery( function($){
    $(document).ready(function(){

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            responsiveClass:true,
            autoplay:true,
            autoplayTimeout:1000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1, 
                },
                600:{
                    items:1
                },
                768:{
                    items:3, 
                }
            }
         });
    
        let titulos = $('h4') // tag
       
        let itens = $('.featured-item') // class
        
        let destaques = $('#featured') // id
     
        console.log(titulos.first());
    
        // Configuração de produtos
    
        $('.featured-item a').addClass('btn btn-dark stretch-link');
    
        $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
        // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
        // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
        // $('.featured-item:first h4').addClass('active')
        // $('.featured-item:first h4').removeClass('active')
        // $('.featured-item:first h4').toggleClass('active')
        // $('.featured-item:first h4').hide()
        // $('.featured-item:first h4').show()
        // $('.featured-item:first h4').fadeIn(2000)
        // $('.featured-item:first h4').fadeOut()
        //  $('.featured-item:first h4').css('color', '#f00')
         
         $('.featured-item h4').dblclick( function(){
    
            $(this).css({
                'color': '#f00',
                'background': '#ff0',
                'font-weight': '100',
            });
    
         });
    
    
         // Alerta personalizado
         
          $('.featured-item a').on('click', function(event) {
            event.preventDefault();
      
            // Exibir o alerta personalizado
            $('#alertaCarrinho').fadeIn();
          });
      
          // Quando o botão "Fechar"
          $('#fecharAlerta').click(function() {
            // Ocultar
            $('#alertaCarrinho').fadeOut();
          });
      
          // menu mobile
    
          $('.navbar-toggler').on('click', function(){
             $('.collapse').slideToggle();
           });
    
    })
    
    
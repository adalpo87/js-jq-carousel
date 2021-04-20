$(function(){

    $('.dx').click(nextPhoto);
    $('.sx').click(prevPhoto);

    function nextPhoto(){
        var activePhoto = $('.image img.active');
        var activePoint = $('.select-img i.active')
        
        // 1)rimuovo la classe active
        activePhoto.removeClass('active');
        activePoint.removeClass('active');

        // 2)sposto la classe active a quello successivo, a meno che non sia l'ultimo che in quel caso vede che length è uguale a 0
        if(activePhoto.next('img').length === 0){
            $('.image img').first().addClass('active');
            $('.select-img i').first().addClass('active');
        }else{
            activePhoto.next('img').addClass('active');
            activePoint.next('i').addClass('active');
        }
        
    }

    function prevPhoto(){
        var activePhoto = $('.image img.active');
        var activePoint = $('.select-img i.active');

        // 1)tolgo la classe active
        activePhoto.removeClass('active');
        activePoint.removeClass('active');
        
        // 2)aggiungo la classe active a quello precedente tramite "prev", nel caso fosse primo allora ritorna all ultimo tramite last
        if(activePhoto.prev('img').length === 0){
            $('.image img').last().addClass('active');
            $('.select-img i').last().addClass('active');
        }else{
            activePhoto.prev('img').addClass('active');
            activePoint.prev('i').addClass('active');
        }
    }
});
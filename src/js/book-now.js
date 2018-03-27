/* script.js */
$(document).ready(function () {

    var BookNow = {
        /* Attributes */
        bodyContainer: null,
        contentForm: null,
        xForm: null,
        tabForm: null,
        btnForm: null,
        stateForm: false,
        /* Méthods */
        init: function () {
            BookNow.bodyContainer = $('#body-container');
            BookNow.contentForm = $('#book-now');
            BookNow.xForm = $('#btn-x img');
            BookNow.tabForm = $('#tap-book-now');
            BookNow.btnForm = $('#btn-lets-go button');

            /* Estado Inicial (Se controla desde CSS)
            BookNow .contentForm .css( 'paddingLeft', '330px' );
            BookNow .tabForm .css( 'right', '-41px' );
            */

            // Datepicker
            $('#arrival-date').datepicker();
            $('#departure-date').datepicker();

            // Events 
            BookNow.xForm.on('click', () => {
                BookNow.close();
            });
            BookNow.tabForm.on('click', () => {
                BookNow.tap();
            });
            BookNow.btnForm.on('click', () => {
                BookNow.btnLetsGo();
            });

        },
        open: () => {
            BookNow.changes('.75', '0', '287px', '#E11F25');
            BookNow.animation();

            BookNow.stateForm = true;
        },
        close: () => {
            BookNow.changes('1', '330px', '-43px', 'black');
            BookNow.animation();

            BookNow.stateForm = false;
        },
        tap: () => {
            console.log('State:', BookNow.stateForm);
            if (BookNow.stateForm) {
                BookNow.close();
                BookNow.stateForm = false;
            }
            else {
                BookNow.open();
                BookNow.stateForm = true;
            }

        },
        btnLetsGo: () => {
            console.log('Diste al botón "Let\'s go"');
            BookNow.close();
        },
        changes: (opacity, paddingLeft, right, bgColor) => {
            BookNow.bodyContainer.css('opacity', opacity);
            BookNow.contentForm.css('paddingLeft', paddingLeft);
            BookNow.tabForm.css('right', right);
            BookNow.tabForm.css('background', bgColor);
        },
        animation: () => {
            BookNow.bodyContainer.css('transition', 'all 0.5s ease');
            BookNow.contentForm.css('transition', 'all 0.5s ease');
            BookNow.tabForm.css('transition', 'all 0.5s ease');
        }
    }
    BookNow.init();

});

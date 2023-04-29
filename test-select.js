// $(document).ready(function () {
//   $('#catalog-select')
//     .select2({
//       dropdownAutoWidth: true,
//     })
//     .on('select2:open', () => {
//       console.log('open');
//       //   $('.select2-dropdown').addClass('animate__animated animate__fadeIn ');
//       setTimeout(function () {
//         jQuery('.select2-dropdown').slideDown(1000);
//       });
//     })
//     .on('select2:closing', () => {
//       console.log('closed');
//       //   $('.select2-dropdown').addClass('animate__animated animate__fadeOut');
//     });
// });

jQuery(document).ready(function () {
  init();
});

function init() {
  $('#select')
    .select2({
      //   allowClear: false,
      minimumResultsForSearch: Infinity,
      width: 'auto',
      //   overflow: 'hidden',
    })
    .on('select2:open', function (e) {
      $('.select2-dropdown').hide();
      $('.select2-container--default').addClass('open');
      setTimeout(function () {
        jQuery('.select2-dropdown').slideDown(150);
      });
    })
    .on('select2:closing', function (e) {
      e.preventDefault();
      $('.select2-container--default').removeClass('open');

      setTimeout(function () {
        jQuery('.select2-dropdown').slideUp(150, function () {
          close();
        });
      }, 0);
    });
}

function close() {
  $('#select').select2('destroy');
  init();
}

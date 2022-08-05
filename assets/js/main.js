$('#select_report').on('change', function() {
    const text = $("option:selected", this).val().toString();

    $(".form-row").each(function() {
    $(this).toggleClass("d-none", this.id !== `form_${text}`)
    })
});

$('.report_show').on('click', function() {
    var report = this.id;

    $(".reporte-row").each(function() {
    $(this).toggleClass("d-none", this.id !== `reporte_${report}`)
    })
});
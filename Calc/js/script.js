document.addEventListener('DOMContentLoaded', function () {
   const form = document.getElementById('calculator-form');
   const pageCountInput = document.getElementById('page-count');
   const pageCountDisplay = document.getElementById('page-count-display');
   const totalPriceElement = document.getElementById('total-price');

   // Обновляем количество страниц при изменении ползунка
   pageCountInput.addEventListener('input', function () {
      pageCountDisplay.textContent = pageCountInput.value;
      calculateTotal(); // Пересчитываем стоимость
   });

   // Отслеживаем изменения всех input элементов
   form.querySelectorAll('input').forEach(function (input) {
      input.addEventListener('change', calculateTotal);
   });

   // Функция для пересчета стоимости
   function calculateTotal() {
      let totalPrice = 0;

      // Тип сайта
      const siteType = form.elements['siteType'].value;
      totalPrice += parseInt(siteType);

      // Тип дизайна
      const designType = form.elements['designType'].value;
      totalPrice += parseInt(designType);

      // Количество страниц (каждая страница стоит 100 грн)
      const pageCount = pageCountInput.value;
      totalPrice += pageCount * 100;

      // Адаптивный дизайн
      const responsiveDesign = form.elements['responsiveDesign'].value;
      totalPrice += parseInt(responsiveDesign);

      // CMS
      const cms = form.elements['cms'].value;
      totalPrice += parseInt(cms);

      // Дополнительные функции
      const additionalServices = form.querySelectorAll('input[name="additional"]:checked');
      additionalServices.forEach(function (service) {
         totalPrice += parseInt(service.value);
      });

      // Обновляем общую стоимость
      totalPriceElement.textContent = totalPrice;
   }

   // Изначальный расчет при загрузке страницы
   calculateTotal();
});

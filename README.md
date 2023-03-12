# nova-poshta-test-task
Nova Poshta Test Assignment

Використані технології
React (hooks / component / router)
Redux
Redux Toolkit
Redux-Persist
Axios
Formik/yup
Emotion


1) Користувач вводить номер ТТН або свій номер накладної в поле введення на сторінці.
2) Додаток відправляє запит на отримання даних про актуальний статус місця доставки товару.
3) Виводиться інформація про відправку користувачеві.
4) Користувач бачить всі попередні номери ТТН у вигляді списку в сайтбарі. Навіть після перезавантаження сторінки.
5) По кліку на вже доданий до списку введених номер ТТН автоматично виконанується запит на статус знаходження товару (доставки) і виведена відповідна інформація. 
При цьому номер ТТН  автоматично відображається в полі введення.
6) Номер ТТН накладної обов'язково перевіряється при введенні на коректність заповнення регулярним виразом
7) Є можливість очистити всі старі ТТН.
8) При невірному форматі після натискання на кнопку отримати статус доставки ТТН, показується підказка і запит не відправляється
9) Переходячи на другу вкладку, користувач матє можливість побачити список відділень Нової пошти, відбувається запит до API Нової пошти
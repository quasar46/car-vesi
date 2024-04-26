<?php
    /*ПОМЕЩАЕМ ДАННЫЕ ИЗ ПОЛЕЙ В ПЕРЕМЕННЫЕ*/
    $name = $_POST["name"];
    $tel = $_POST["tel"];
    $email = $_POST["email"];
    $answers = $_POST["answers"];
    $price = $_POST["price"];

    /*ЗДЕСЬ ПРОВЕРЯЕМ ЕСЛИ ХОТЯ БЫ ОДНО ИЗ ПОЛЕЙ НЕ ЗАПОЛНЕНО МЫ ВОЗВРАЩАЕМ СООБЩЕНИЕ*/
    if ($tel==""){ 
        echo "Заполните все поля";
    }

    else{
        /*ЕСЛИ ВСЕ ПОЛЯ ЗАПОЛНЕНЫ НАЧИНАЕМ СОБИРАТЬ ДАННЫЕ ДЛЯ ОТПРАВКИ*/
        // $to = "nizhveskom@yandex.ru, jivoy1057@mail.ru";
        $to = "jivoy1057@mail.ru";
        $subject = "Новая заяка с сайта автовесов"; /*Тема письма*/
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: <info@nizhveskom.ru>\r\n";/*ОТ КОГО*/

        /*ВО ВНУТРЬ ПЕРЕМЕННОЙ $message ЗАПИСЫВАЕМ ДАННЫЕ ИЗ ПОЛЕЙ */
        $message .= "Имя клиента: ".$name."<br>";
        $message .= "Телефон: ".$tel."<br>";
        $message .= "Почта: ".$email."<br>";
        $message .= "Опрос: ".$answers."<br>";
        $message .= "Цена: ".$price;

        /*ДЛЯ ОТЛАДКИ ВЫ МОЖЕТЕ ПРОВЕРИТЬ ПРАВИЛЬНО ЛИ ЗАПИСАЛИCM ДАННЫЕ ИЗ ПОЛЕЙ*/

        $send = mail($to, $subject, $message, $headers);

        /*ЕСЛИ ПИСЬМО ОТПРАВЛЕНО УСПЕШНО ВЫВОДИМ СООБЩЕНИЕ*/
        if ($send == "true")
        {
            echo "Ваше сообщение отправлено. Ожидайте звонка нашего специалиста.\r\n";
        }
        /*ЕСЛИ ПИСЬМО НЕ УДАЛОСЬ ОТПРАВИТЬ ВЫВОДИМ СООБЩЕНИЕ ОБ ОШИБКЕ*/
        else
        {
            echo "Не удалось отправить, попробуйте снова!";
        }
    }

?>
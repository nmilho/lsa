<?php

    $supported_languages = array("en","pt");
    $supported_languages = array_flip($supported_languages);
    //var_dump($supported_languages); // array(2) { ["en"]=> int(0) ["nl"]=> int(1) }

    $http_accept_language = $_SERVER["HTTP_ACCEPT_LANGUAGE"]; // es,nl;q=0.8,en-us;q=0.5,en;q=0.3

    //var_dump($http_accept_language); 

    preg_match_all('~([\w-]+)(?:[^,\d]+([\d.]+))?~', strtolower($http_accept_language), $matches, PREG_SET_ORDER);

    $available_languages = array();

    foreach ($matches as $match)
    {
        list($language_code,$language_region) = explode('-', $match[1]) + array('', '');

        $priority = isset($match[2]) ? (float) $match[2] : 1.0;

        $available_languages[][$language_code] = $priority;
    }

    //var_dump($available_languages); 

    $default_priority = (float) 0;
    $default_language_code = 'en';

    foreach ($available_languages as $key => $value)
    {
        $language_code = key($value);
        $priority = $value[$language_code];

        if ($priority > $default_priority && array_key_exists($language_code,$supported_languages))
        {
            $default_priority = $priority;
            //$default_language_code = $language_code;
            $default_language_code = 'pt'; //TODO: remover linha após linguagem en pronta

            //var_dump($default_priority); // float(0.8)
            //var_dump($default_language_code); // string(2) "nl"
        }
    }

    //var_dump($default_language_code); // string(2) "nl" 


    header("location: ".$default_language_code."/index.php");

?>
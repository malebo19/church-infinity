<?php

class db
{
  
    public static $connection = null;
    public static function connect($host, $user_name, $password)
    {
       db::$connection = @mysqli_connect($host, $user_name, $password);
        // Check connection
        if (!DB::$connection) {
            return( "Connection failed: " . mysqli_connect_error());
        }
        return true;
    }

    public static function set_db_name($db_name)
    {
        $conn =db::$connection;
        $db_select = mysqli_select_db($conn, $db_name);
        if (!$db_select) {
            return die( mysqli_error($conn));
            exit;
        }
        return true;
    }


    public static function Insert($sql, $params = null)
    {
       
        $conn =db::$connection;

        $array = str_split($sql);

        $count_tracker = 0;
        foreach ($array as $key => $char) {
            if ($char == "?") $count_tracker++;
        }

        if ($params !== null) {
            $param_size = sizeof($params);
            if ($count_tracker !== $param_size) die("<b> param ($param_size) size dont match ? ($count_tracker) placeholders </b>  in $sql");
            $param_index = 0;
            foreach ($array as $key => $char) {
                if ($char == "?") {
                    $value = $params[$param_index];
                    if (is_int($value) == 1  or is_float($value) == 1) {
                        $array[$key] = $value;
                        $param_index++;
                    } else {
                        $array[$key] = "\"" . mysqli_escape_string($conn, $value) . "\"";
                        $param_index++;
                    }
                }
            }
            $sql = join("", $array);
        }

        if (mysqli_query($conn, $sql)) {
            return true;
        } else {
            return  die(mysqli_error($conn));
        }
    }


    public static function Select($sql, $params = null)
    { 
        $conn =db::$connection;

        $array = str_split($sql);

        $count_tracker = 0;
        foreach ($array as $key => $char) {
            if ($char == "?") $count_tracker++;
        }

        if ($params !== null) {
            $param_size = sizeof($params);
            if ($count_tracker !== $param_size) die("<b> param ($param_size) size dont match ? ($count_tracker) placeholders </b>  in $sql");
            $param_index = 0;
            foreach ($array as $key => $char) {
                if ($char == "?") {
                    $value = $params[$param_index];
                    if (is_int($value) == 1  or is_float($value) == 1) {
                        $array[$key] = $value;
                        $param_index++;
                    } else {
                        $array[$key] = "\"" . mysqli_escape_string($conn, $value) . "\"";
                        $param_index++;
                    }
                }
            }
            $sql = join("", $array);
           
        }
        

        $result = mysqli_query($conn, $sql) or die(mysqli_error($conn));

        if (mysqli_num_rows($result) > 0) {
            // output data of each row
            $row_data = [];
            while ($row = mysqli_fetch_assoc($result)) {
                $row_data[] = $row;
            }
            return $row_data;
        } else {
            return [];
        }
    }


    public static function Update($sql, $params = null)
    {
        $conn =db::$connection;

        $array = str_split($sql);

        $count_tracker = 0;
        foreach ($array as $key => $char) {
            if ($char == "?") $count_tracker++;
        }

        if ($params !== null) {
            $param_size = sizeof($params);
            if ($count_tracker !== $param_size) die("<b> param ($param_size) size dont match ? ($count_tracker) placeholders </b>  in $sql");
            $param_index = 0;
            foreach ($array as $key => $char) {
                if ($char == "?") {
                    $value = $params[$param_index];
                    if (is_int($value) == 1  or is_float($value) == 1) {
                        $array[$key] = $value;
                        $param_index++;
                    } else {
                        $array[$key] = "\"" . mysqli_escape_string($conn, $value) . "\"";
                        $param_index++;
                    }
                }
            }
            $sql = join("", $array);
           
        }

        if (mysqli_query($conn, $sql)) {
            return true ;
        }else {
            return die( mysqli_error($conn));
        }
        

    }
}

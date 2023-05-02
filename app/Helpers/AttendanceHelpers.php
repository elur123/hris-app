<?php

/**
 * Get date time difference
 */

if (! function_exists('get_date_time_difference'))
{
    function get_date_time_difference($date_one, $date_two)
    {
        $date1_obj = new DateTime($date_one);
        $date2_obj = new DateTime($date_two);

        $diff = $date2_obj->diff($date1_obj);

        $working_hours = ($diff->days * 24 * 60) + $diff->h + $diff->i;

        return $working_hours > 8 ? 8 : $working_hours;
    }
}
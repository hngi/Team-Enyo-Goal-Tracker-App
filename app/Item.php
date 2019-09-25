<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = [
        'title'
    ];

    public function goal()
    {
        return $this->belongsTo('App\Goal');
    }
}

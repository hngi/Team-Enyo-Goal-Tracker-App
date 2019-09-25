<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Goal extends Model
{
    protected $fillable = [
        'name'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function items()
    {
        return $this->hasMany('App\Item');
    }
}

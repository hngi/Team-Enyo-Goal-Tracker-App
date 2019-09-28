<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = [
        'title' , 'goal_id'
    ];

    public function scopeOfGoal($query, $goalId)
    {
        return $query->where('goal_id', $goalId);
    }

    public function goal()
    {
        return $this->belongsTo('App\Goal');
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
  protected $tables = 'companies';
  protected $with = ['user'];
  protected $fillable = ['company_name','url','logo'];

  public function user()
    {
      return $this->belongsTo(User::class, 'user_id');
    }
}

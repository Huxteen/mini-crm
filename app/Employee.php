<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
  protected $tables = 'employees';
  protected $with = ['user', 'company'];
  protected $fillable = ['name','company_id'];

  public function user()
  {
    return $this->belongsTo(User::class, 'user_id');
  }
  public function company()
  {
    return $this->belongsTo(Company::class, 'company_id');
  }
}

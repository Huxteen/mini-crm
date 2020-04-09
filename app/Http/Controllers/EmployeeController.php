<?php

namespace App\Http\Controllers;

use App\Employee;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $employees = Employee::all();
      return response()->json(['employees' => $employees], 200);
    }

    public function init(Employee $employee)
    {
      $user = Auth::user();
      $employee = Employee::where('user_id',"=", $user->id)->first();
      return response()->json(
        ['employee' => $employee],
      200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $validate = $request->validate([
        'name'=>'required',
        'email'=>'required',
        'company_id'=>'required',
        'password'=>'required',
      ]);
      if (!$validate)
      {
        return response()->json(['error' => 'All fields are required.'], 401);
      }

      $email = strtolower($request->email);
      $user = User::where('email', $email)->first();
      if (isset($user->id))
      {
        return response()->json(['error' => 'Email Already exists.'], 401);
      }

      $user = new User();
      $user->email = $email;
      $user->role = 3;
      $user->password = bcrypt($request->password);
      $user->save();

      $employee = new Employee();
      $employee->name = $request->name;
      $employee->company_id = $request->company_id;
      $employee->user_id = $user->id;
      $employee->save();

      $employee = Employee::find($employee->id);

      return response()->json([
        'success' => "Employee created successfully.", 
        'employee' => $employee], 
        200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee, $id)
    {
      $employee = Employee::find($id);
      return response()->json($employee, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee $employee)
    {
      $employee = Employee::find($id);
      return response()->json($employee, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $employee, $id)
    {
      $validate = $request->validate([
        'name'=>'required',
        'email'=>'required',
      ]);
      if (!$validate)
      {
        return response()->json(['error' => 'These fields(name, email) are required.'], 401);
      }
      $employee = Employee::find($id);
      $employee->name =  $request->name;
      // check if the company_id field is provided
      // check if Authenticated user is an admin user
      if($request->company_id){
        $employee->company_id = $request->company_id;
      }
      $employee->save();

      $email = strtolower($request->email);
      $user = User::find($employee->user_id);
      $user->email = $email;
      $user->role = 3;
      if($request->password)
      {
        $user->password = bcrypt($request->password);
      }
      $user->save();

      $employee = Employee::find($id);
      return response()->json([
        'success' => 'Employee updated successfully',
        'employee' => $employee,
      ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee, $id)
    {
      $employee = Employee::find($id);

      $user = User::find($employee->user_id);
      $user->delete();

      $msg = "Employee has been deleted successfully";
      return response()->json([
        'success' => 'Employee has been deleted successfully',
        'employee' => $employee,
      ], 200);
    }
}

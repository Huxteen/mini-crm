<?php

namespace App\Http\Controllers;

use App\Company;
use App\Employee;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Image;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $companies = Company::with('user')->get();
      return response()->json(['companies' => $companies], 200);
    }
    public function paginatedCompany()
    {
      $companies = Company::paginate(5);
      $users = User::all()->count();
      $company = Company::all()->count();
      $employees = Employee::all()->count();
      $admins = User::where('role','=', 1)->get()->count();
   
      return response()->json([
        'companies' => $companies,
        'users' => $users,
        'company' => $company,
        'employees' => $employees,
        'admins' => $admins,
      ], 200);
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
        'url'=>'required',
        'logo' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
      ]);
      if (!$validate)
      {
        return response()->json(['error' => 'All fields are required.'], 401);
      }

      $filename = "logo.png";
      if($request->hasFile('logo')){
          $logo= $request->file('logo');
          $filename = time().'.'.$logo->getClientOriginalExtension();
          Image::make($logo)->resize(null, 220)->save(('./storage/logo/'.$filename));
      }

      $email = strtolower($request->email);
      $user = User::where('email', $email)->first();
      if (isset($user->id))
      {
        return response()->json(['error' => 'Email Already exists.'], 401);
      }

      $user = new User();
      $user->email = $email;
      $user->role = 2;
      $user->password = bcrypt($request->password);
      $user->save();

      $company = new Company();
      $company->name = $request->name;
      $company->url = $request->url;
      $company->user_id = $user->id;
      $company->logo = $filename;
      $company->save();

      $company = Company::find($company->id);

      return response()->json([
        'success' => "Company created successfully.",
        'company' => $company,
      ], 200);
    }
    public function storeAdmin(Request $request)
    {
      $validate = $request->validate([
        'name'=>'required',
        'email'=>'required',
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
      $user->role = 1;
      $user->password = bcrypt($request->password);
      $user->save();

      return response()->json([
        'success' => "Admin added successfully.",
        'user' =>  $user,
      ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company, $id)
    {
      $company = Company::find($id);
      return response()->json($company, 200);
    }
    public function init(Company $company)
    {
      $user = Auth::user();
      $company = Company::where('user_id',"=", $user->id)->first();
      return response()->json(
        ['company' => $company],
      200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function edit(Company $company, $id)
    {
      $company = Company::find($id);
      return response()->json($company, 200);
    }
    public function showEmployee(Company $company, Employee $employee, $id)
    {
      $employee = Employee::where('company_id','=', $id)->get();
      $company = Company::find($id);
      return response()->json([
        'employee' => $employee,
        'company' => $company
      ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Company $company, $id)
    {
      $validate = $request->validate([
        'name'=>'required',
        'url'=>'required',
      ]);
      if (!$validate)
      {
        return response()->json(['error' => 'These fields(name, url) are required.'], 401);
      }
      $company = Company::find($id);
      // $company->name = $request->name;
      $company->name =  $request->name;
      $company->url = $request->url;
      if($request->hasFile('logo')){
        $logo= $request->file('logo');
        $filename = time().'.'.$logo->getClientOriginalExtension();
        Image::make($logo)->resize(null, 220)->save(('./storage/logo/'.$filename));
        $company->logo = $filename;
      }
      $company->save();

      $email = strtolower($request->email);
      $user = User::find($company->user_id);
      $user->email = $email;
      if($request->password)
      {
        $user->password = bcrypt($request->password);
      }
      $user->save();

      $company = Company::find($id);
      return response()->json([
        'success' => "Company has been updated successfully.",
        'company' => $company,
      ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $Request, Company $company, $id)
    {
      $company = Company::find($id);
     
      $user = User::find($company->user_id);
      $user->delete();

      return response()->json([
        'success' => "Company has been deleted successfully",
        'company' => $company,
      ], 200);
    }
}

<?php

namespace App\Http\Controllers;

use App\Company;
use App\User;
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
          Image::make($logo)->resize(220, 220)->save(storage_path('app/public/logo/'.$filename));
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

      return response()->json($company, 200);
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
        Image::make($logo)->resize(220, 220)->save(storage_path('app/public/logo/'.$filename));
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
      return response()->json($company, 200);
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
      $company->delete();

      $msg = $company->name." - Company has been deleted successfully";
      return response()->json([
        'success' => $msg,
        'company' => $company,
      ], 401);
    }
}

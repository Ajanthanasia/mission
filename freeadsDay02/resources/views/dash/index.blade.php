@extends('layout')
@section('content')
<div class="row">
    <div class="col-md-12">
        <div class="panel">
            <h3>Hi, {{ Auth::user()->name }}</h3>
            <label for="">You are successfully login.</label>
        </div>
    </div>
</div>
<div class="row">
    <a href="{{route('user.edit')}}">
        <button>Edit Profile</button>
    </a>
    <a href="{{route('logout')}}">
        <button>Logout</button>
    </a>
</div>
@endsection
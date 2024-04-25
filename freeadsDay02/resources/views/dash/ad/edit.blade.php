@extends('dash.layout')
@section('dash')
    <form action="{{ route('ad.all.update') }}" method="post">
        @csrf
        <div>
            <label for="">Title</label>
            <input type="text" name="title" value="{{ $ad->title }}" required>
        </div>
        <div>
            <label for="">Description</label>
            <input type="text" name="description" value="{{ $ad->description }}" required>
        </div>
        <div>
            <label for="">Price</label>
            <input type="decimal" name="price" value="{{ $ad->price }}" required>
        </div>
        <div>
            <input type="hidden" name="ad_id" value="{{ $ad->id }}">
            <button type="submit">Update</button>
        </div>
    </form>
@endsection

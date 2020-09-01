<?php

namespace App\Http\Middleware;

use Closure;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;

class JWTAuthentication
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {

            JWTAuth::parseToken()->authenticate();

        }catch(\Exception $e) {

            if($e instanceOf TokenExpiredException) {
                $newToken = JWTAuth::parseToken()->refresh();

                return response()->json(['success' => false, 'token' => $newToken, 'status' => 'expired'], 200);
            }
            else if($e instanceOf TokenInvalidException) {
                return response()->json(['success' => false, 'message' => 'Token is Invalid'], 401);
            }
            else {
                return response()->json(['success' => false, 'message' => 'There is a problem with your token'], 401);
            }

        }
        return $next($request);
    }
}

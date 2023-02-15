<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;

trait ApiResponseTrait
{
    /**
     * Returns a success response with the given data.
     *
     * @param array|string $data
     * @param int $status
     * @return JsonResponse
     */
    public function successResponse($data, $status = 200): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $data
        ], $status);
    }

    /**
     * Returns an error response with the given message and status code.
     *
     * @param string $message
     * @param int $status
     * @return JsonResponse
     */
    public function errorResponse($message, $status = 400): JsonResponse
    {
        return response()->json([
            'success' => false,
            'error' => $message
        ], $status);
    }

    /**
     * Returns a not found response with the given message.
     *
     * @param string $message
     * @return JsonResponse
     */
    public function notFoundResponse($message = 'Not found'): JsonResponse
    {
        return $this->errorResponse($message, 404);
    }

    /**
     * Returns an unauthorized response with the given message.
     *
     * @param string $message
     * @return JsonResponse
     */
    public function unauthorizedResponse($message = 'Unauthorized'): JsonResponse
    {
        return $this->errorResponse($message, 401);
    }

    /**
     * Returns a validation error response with the given errors array.
     *
     * @param array $errors
     * @return JsonResponse
     */
    public function validationErrorResponse($errors): JsonResponse
    {
        return $this->errorResponse($errors, 422);
    }
}

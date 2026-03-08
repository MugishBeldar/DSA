
---

### 🔹 What is RESTful API?

A **RESTful API (Representational State Transfer API)** is an **architectural style** for designing networked applications. It uses **HTTP** to enable communication between **client and server**, and focuses on **stateless, cacheable, and uniform interfaces**.

---

### 🔹 Key Principles (REST Constraints)

1. **Client–Server Architecture**

   * The **client** (e.g., browser, mobile app, IoT device) and **server** (e.g., backend app or database layer) are **independent**.
   * The client handles the UI/UX; the server handles data and business logic.
   * This separation improves **scalability** and **portability**.

---

2. **Stateless**

   * Every request from the client to the server must contain **all the information** needed to process the request.
   * The server does **not store session data** between requests.
   * Example: Instead of keeping login sessions, we use **JWT tokens** in headers.

---

3. **Cacheable**

   * Server responses should define if data is **cacheable** or not (using headers like `Cache-Control`, `ETag`).
   * Caching improves performance by reducing server load and network latency.

---

4. **Uniform Interface**

   * REST relies on a **consistent and predictable structure**.
   * This includes:

     * **Resource-based URLs:** `/users`, `/users/1/orders`
     * **Standard HTTP methods:**

       * `GET` → Retrieve data
       * `POST` → Create new data
       * `PUT` → Replace entire data
       * `PATCH` → Update part of the data
       * `DELETE` → Remove data
     * **Standard Status Codes:**

       * `200 OK`, `201 Created`, `204 No Content`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`

---

5. **Layered System**

   * REST APIs can have multiple layers (e.g., **load balancer**, **authentication**, **cache**, **database**) and the client shouldn’t care about them.
   * This adds **scalability** and **security**.

---

6. **Code on Demand (Optional)**

   * Server can send **executable code** (like JavaScript) to the client.
   * This is optional and rarely used in most REST APIs.

---

### 🔹 Example of RESTful Design

**Resource:** `User`

| Operation             | HTTP Method | Endpoint         | Description        |
| --------------------- | ----------- | ---------------- | ------------------ |
| Get all users         | GET         | `/api/users`     | Fetch all users    |
| Get single user       | GET         | `/api/users/:id` | Fetch user by ID   |
| Create user           | POST        | `/api/users`     | Add new user       |
| Update user           | PUT         | `/api/users/:id` | Replace user data  |
| Partially update user | PATCH       | `/api/users/:id` | Modify user fields |
| Delete user           | DELETE      | `/api/users/:id` | Remove a user      |

---

### 🔹 Additional Technical Concepts

1. **Request Components**

   * **URL/Endpoint**
   * **Headers** (e.g., `Content-Type`, `Authorization`)
   * **Body** (for POST, PUT, PATCH)
   * **Query Params** (for filters, pagination, etc.)

2. **Response Components**

   * **Status Code**
   * **Headers**
   * **Response Body** (usually JSON)
   * Example:

     ```json
     {
       "status": "success",
       "data": {
         "id": 1,
         "name": "Jon Doe"
       }
     }
     ```

3. **Best Practices**

   * Use **plural nouns** for resources: `/users`, `/products`
   * Use **nouns, not verbs**: ✅ `/users` ❌ `/getUsers`
   * Use **versioning**: `/api/v1/users`
   * Handle **errors consistently** (e.g., return structured JSON error responses)
   * Implement **authentication** (JWT, OAuth2)
   * Use **pagination and filtering** for large datasets

---

### 🔹 REST vs SOAP vs GraphQL (Quick Comparison)

| Feature     | REST      | SOAP            | GraphQL     |
| ----------- | --------- | --------------- | ----------- |
| Protocol    | HTTP      | XML-based       | HTTP        |
| Format      | JSON, XML | XML             | JSON        |
| Flexibility | High      | Low             | Very high   |
| Performance | Good      | Heavy           | Efficient   |
| Use case    | Web APIs  | Enterprise apps | Modern APIs |

---
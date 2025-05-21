# FakeStore API Testing with Postman

This repository contains a Postman collection for testing the FakeStore API (https://fakestoreapi.com/products).

## Test Objectives

The collection verifies:

1. Server response code (expected 200)
2. Product attribute validation:
   - `title` must not be empty
   - `price` must not be negative
   - `rating.rate` must not exceed 5
3. Generates a list of products containing defects

## How to Use

### Import the Collection into Postman

1. Open Postman
2. Click on "Import" in the top left corner
3. Select the `fakestore_api_tests.postman_collection.json` file
4. Click "Import"

### Run the Tests

1. Open the imported "FakeStore API Tests" collection
2. Use the "Run Collection" feature to execute all tests:
   - Click the "..." (more actions) button next to the collection name
   - Select "Run collection"
   - Click "Run FakeStore API Tests"

### View Test Results

After running the collection:

1. The "Get All Products" request validates all products and logs defects
2. The console output in the Postman test results shows:
   - Total number of products tested
   - Number of products with each type of defect
   - Details of defective products

3. The test results panel shows passed/failed tests

## Collection Structure

The collection includes:

1. **Get All Products**: Retrieves all products and performs bulk validation tests
2. **Get Single Product**: Tests a single product (ID: 1) with the same validation rules

## Understanding Test Results

- Green checkmarks indicate passed tests
- Red X marks indicate failed tests
- The console output provides detailed information about any found defects

## Example Defect Report

The test scripts store defective products in the console output and as Postman environment variables. Example output:

```
--- FAKESTORE API TEST RESULTS ---
Total products tested: 20
Products with empty titles: 1
Products with negative prices: 2
Products with ratings exceeding 5: 1
----------------------------
```

For each type of defect, details of the affected products are also logged. 
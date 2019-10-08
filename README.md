Mongo Aggregation
===

## Learning Objectives

1. Learn to use `mongoimport` and `mongoexport`
1. Create aggregation pipelines to understand data in mongodb

## Aggregation

[To the docs!](https://docs.mongodb.com/manual/aggregation/)

### Aggregation Pipeline

* [Aggregation Pipeline](https://docs.mongodb.com/manual/core/aggregation-pipeline/)
* Happens on the server
* Exposed on each model as `.aggregate`, but is a pass-thru (no special mongoose logic)
* Process
    1. Import data using `mongoimport` 
    2. Work out commands in Compass or Robo3T
    3. Copy to Route when complete

### Key Operators

* `$match`
    * filter documents, either pre or post
    * same syntax as `find`
* `$group`
    * aggregate based on given `_id` "key(s)"
    * use `$sum`, `$min`, `$avg`, etc.
* `$unwind`
    * access data in arrays
    * "multiplies" documents (like a SQL join)
* `$project` (verb, not a noun)
    * shape and prune data
* `$sort`
    * useful after an aggregation to get "top"
* `$sample`
    * return a random sample
    * good for features of "random" selections

### Exercise

Restaurant Data

const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/sample.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });

db.run('CREATE TABLE IF NOT EXISTS videos(videoId text, title text, description text, publishedAt DATETIME, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)') ;
  // db.run('CREATE TABLE langs(name text)');


const saveVideo = async (videoId, title, description, publishedAt) => {
	console.log("inserting / putting videos in  database") ;

	try {
		return await new Promise((resolve, reject) => {
    		db.run('INSERT INTO videos(videoId, title, description, publishedAt) VALUES(?,?,?,?)', [videoId, title, description, publishedAt], function(err) {
        		if (err)
            		reject(err)

            	console.log(this);
        		resolve(this)
    		})
		})
	} catch (err) {
		console.log(err) ;
	}
}

const getAllVideos = async (offset, limit) => {
	console.log("Searching videos in  database") ;

	try {
		return await new Promise((resolve, reject) => {
    		db.all('SELECT * FROM videos ORDER BY publishedAt DESC LIMIT ? OFFSET ?', [limit, offset], (err, rows) => {
        		if (err)
            		reject(err)
            	// console.log(rows);
        		resolve(rows)
    		})
		})
	} catch (err) {
		console.log(err) ;
	}
}

const getVideos = async (query) => {
	console.log("Searching videos in  database") ;

	try {
		return await new Promise((resolve, reject) => {
    		db.all('SELECT * FROM videos WHERE title=? or description=?', [query, query], (err, rows) => {
        		if (err)
            		reject(err)

            	// console.log(rows);
        		resolve(rows)
    		})
		})
	} catch (err) {
		console.log(err) ;
	}
}

// getVideos().then(data => console.log(data)) ;

module.exports = {
	saveVideo: saveVideo,
	getVideos: getVideos,
	getAllVideos: getAllVideos
}


  // const sqlite3 = require('sqlite3').verbose();

  // let db = new sqlite3.Database('../db/sample.db');

  // // db.run('CREATE TABLE langs(name text)');

  // db.run(`INSERT INTO langs(name) VALUES(?)`, ['C'], function(err) {
  //   if (err) {
  //     return console.log(err.message);
  //   }
  //   // get the last insert id
  //   console.log(`A row has been inserted with rowid ${this.lastID}`);
  // });

  // // close the database connection
  // db.close();

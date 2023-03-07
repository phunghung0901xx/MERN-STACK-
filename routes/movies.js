const router = require("express").Router();
const { parse } = require("dotenv");
const Movie = require("../models/dataMovives")

router.post("/getAllMovies", async (req, res) => {
    try {
        const skip = parselnt(req.body.skip) - 1 || 0;
        const limit = parselnt(req.query.limit) || 5;
        const searchText = req.query.searchText || ""
        let sort = req.query.sort || "rating"
        let genre = req.query.genre || "All"

        const genreOptions = [
            "Action",
            "Romance",
            "Fantasy",
            "Drama",
            "Crime",
            "Adventure",
            "Thriller",
            "Sci-fi",
            "Music",
            "Family",
        ];

        genre === "All"
            ? (genre = [...genreOptions])
            : (genre = req.query.genre.split(","));
        req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

        let sortBy = {};
        if (sort[1]) {
            sortBy[sort[0]] = sort[1];
        } else {
            sortBy[sort[0]] = "asc";
        }

        const movies = await Movie.find({ name: { $regex: searchText, $options: "i" } })
            .where("genre")
            .in([...genre])
            .sort(sortBy)
            .skip(skip * limit)
            .limit(limit);

        const total = await Movie.countDocuments({
            genre: { $in: [...genre] },
            name: { $regex: searchText, $options: "i" },
        });

        const response = {
            error: false,
            total,
            skip: skip + 1,
            limit,
            genres: genreOptions,
            movies,
        };

        res.status(200).json(response);
    }
    catch {
        console.log(err)
        res.status(500).json({ err: true, message: "Internal Sever Error" })

    }
})

module.exports = router
export default function Select(props) {
    return(

        <div className="custom-select">
                <input className="number select" type='number' placeholder="05" onChange={props.setNumber}></input>
            <select className="categories select" placeholder="Select Category" onChange={(e)=>props.setCategory(e)}>
                <option value="&category=9">Any Category:</option>
                <option value="&category=9">General Knowledge</option>
                <option value="&category=10">Entertainment: Books</option>
                <option value="&category=11">Entertainment: Flims</option>
                <option value="&category=12">Entertainment: Music</option>
                <option value="&category=13">Entertainment: Musicals & theatres</option>
                <option value="&category=14">Entertainment: Television</option>
                <option value="&category=15">Entertainment: Video Games</option>
                <option value="&category=16">Entertainment: Board Games</option>
                <option value="&category=17">Science & Nature</option>
                <option value="&category=18">Science: Computers</option>
                <option value="&category=19">Science: Mathematics</option>
                <option value="&category=20">Mythology</option>
                <option value="&category=21">Sports</option>
                <option value="&category=22">Geography</option>
                <option value="&category=23">History</option>
                <option value="&category=24">Politics</option>
                <option value="&category=25">Art</option>
                <option value="&category=26">Celebrities</option>
                <option value="&category=27">Animals</option>
                <option value="&category=28">Vehicles</option>
                <option value="&category=29">Entertainment: Comics</option>
                <option value="&category=30">Science: Gadgets</option>
                <option value="&category=31">Entertainment: Japanese Anime & Manga</option>
                <option value="&category=32">Entertainment: Cartoon & Animations</option>
            </select>


            <select className="dificulty select" onChange={(e)=>props.setDifficulty(e)}>
                <option value="">Any Diffuculty</option>
                <option value="&diffuculty=easy">Easy</option>
                <option value="&difficulty=medium">Medium</option>
                <option value="&difficulty=hard">Hard</option>
            </select>


            <select className="type select" onChange={(e)=>props.setType(e)}>
                <option value="">Any Type</option>
                <option value="&type=multiple">Multiple Choice</option>
                <option value="&type=boolean">True / False</option>
            </select>
    </div>
)
}
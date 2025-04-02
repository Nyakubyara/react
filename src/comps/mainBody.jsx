import React from 'react';

const MainBody = ({ userStatus, page }) => {
    return (
        <>
            {/* Render content based on the 'page' prop */}
            {page === "home" ? (
                userStatus ? (
                    <>
                        <h1>Admin Movies</h1>
                        <div className="flex gap-1 w-5/6 mt-10 m-auto">
                            {[0, 1, 2, 3].map((data) => (
                                <div key={data} className="bg-gray-800 p-2">
                                    <img
                                        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWW7oafUlfsv6aKKwTBGzwXZMERovmN5v_vg&s`}
                                        alt="Movie Poster"
                                    />
                                    <h3 className="text-gray-200 text-sm">be happy</h3>
                                    <p className="text-gray-200 text-xs">Indian</p>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <h1>Normal User Movies</h1>
                        <div className="flex gap-1 w-5/6 mt-10 m-auto">
                            {[0, 1, 2, 3].map((data) => (
                                <div key={data} className="bg-gray-800 p-2">
                                    <img
                                        src={`https://musicart.xboxlive.com/7/91fb6d00-0000-0000-0000-000000000002/504/image.jpg?w=720`}
                                        alt="Movie Poster"
                                    />
                                    <h3 className="text-gray-200 text-sm">be happy</h3>
                                    <p className="text-gray-200 text-xs">Indian</p>
                                </div>
                            ))}
                        </div>
                    </>
                )
            ) : page === "about" ? (
                <div>
                    <h1>About Us</h1>
                    <p> We provide you with different kind of movies.</p>
                </div>
            ) : page === "feedback" ? (
                <div>
                    <h1>Feedback</h1>
                    <form>
                        <label htmlFor="feedback">Your Feedback:</label>
                        <textarea id="feedback" name="feedback" rows="4" cols="50"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h1>Welcome!</h1>
                    <p>Select a menu to view content.</p>
                </div>
            )}
        </>
    );
};
export default MainBody;

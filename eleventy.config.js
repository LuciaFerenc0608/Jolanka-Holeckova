module.exports = function (eleventyConfig) {
  // Add a watch target for the CSS file
  eleventyConfig.addWatchTarget("css");
    // Passthrough copy for the CSS file
  eleventyConfig.addPassthroughCopy("css");
    // Passthrough copy for the images folder
    eleventyConfig.addPassthroughCopy("images");
   // Passthrough copy for the music folder 
      eleventyConfig.addPassthroughCopy("music");
    

    return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
}
source "https://rubygems.org"

# Specify the Jekyll version to use
gem "jekyll", "~> 4.3.4"

# Default theme for Jekyll sites (change if using a custom theme)
gem "minima", "~> 2.5"

# Uncomment the following line if deploying with GitHub Pages
# gem "github-pages", "~> 232", group: :jekyll_plugins

# Add plugins here
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Include zoneinfo data for Windows and JRuby platforms
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Boost file-watching performance on Windows
gem "wdm", "~> 0.1", platforms: [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to version 0.6.x for JRuby
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]

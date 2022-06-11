### Personal Page

This is the source code for Chu-Ming's personal page.

Based on [dbyll](https://github.com/dbtek/dbyll) by dbtek.

### Local build

To build locally:

1. Install Ruby and required libraries.
```
apt-get install ruby build-essential
```

2. Install bundler.
```
gem install bundler
```

3. Install Jekyll
```
gem install jekyll
```

4. Run Jekyll to serve Jekyll site locally.
```
bundle install
bundle exec jekyll serve --incremental
``` 

#### Notes
* If incremental build doesn't work, use `bundle exec jekyll serve --force_polling` instead.
* If there are errors during `bundle install`, run `bundle update` to update dependencies.


### License
- [MIT](http://opensource.org/licenses/MIT)
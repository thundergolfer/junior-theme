# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "junior-jekyll-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Jonathon Belotti"]
  spec.email         = ["jbelotti@zendesk.com"]

  spec.summary       = "Junior is a blog/portfolio theme for Jekyll, the static site generator. It's designed and developed by @jonobelotti_IO."
  spec.homepage      = "https://github.com/thundergolfer/junior-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.3"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end

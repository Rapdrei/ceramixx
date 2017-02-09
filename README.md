# About
Ceramixx is an alternative Stl Slicer and GCode Generator with an own user
interface written in QT.
There are multible GCode generators out there like like
[Slic3r](http://slic3r.org/) and [Skeinforge](http://reprap.org/wiki/Skeinforge)
but most of them are focused on plastic 3D print.

Ceramixx instead is optimized for Ceramics printing. Experiments showed that
GCode generators for plastic produce often too complex and restrictive
GCode for the Ceramics printing process but come short on other ends.

Ceramixx focuses on a simple but powerful to use approach to generate GCode
specifically for Ceramics printing.
See Features for a listing of Ceramixx features.

## Features

## Installation Mac
### Additional Tools/Software needed
* Homebrew package manager for MacOSX installation instructions
[here](http://brew.sh/index_de.html).
* Python 3.x, feel free to choose your favourite python interpreter. Although
i recommend [Anaconda](https://www.continuum.io/downloads) python.
Your favourite IDE or Code Editor e.g. [Atom.io](https://atom.io/).

### PySide
`brew install qt`
`pip install -U PySide`

### numpy
`pip install numpy`

### numpy-stl
`pip install numpy-stl`

### sphinx
`pip install sphinx`


## Technologies
* [Anaconda Python (Python 3.6)](https://www.continuum.io/downloads)
* [PySide](https://wiki.qt.io/PySide)
* [numpy](http://www.numpy.org/)
* [numpy-stl](https://pypi.python.org/pypi/numpy-stl)
* [Sphinx](http://www.sphinx-doc.org/en/stable/)
* [Homebrew](http://brew.sh/index_de.html)

## License
This Software is licensed under
[GNU GPL v3.0](http://www.gnu.org/licenses/gpl-3.0.txt).

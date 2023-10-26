FROM ubuntu:latest
RUN apt update && apt -y install sudo
RUN sudo apt -y install nodejs && sudo apt -y install imagemagick && sudo apt -y install tesseract-ocr-ind
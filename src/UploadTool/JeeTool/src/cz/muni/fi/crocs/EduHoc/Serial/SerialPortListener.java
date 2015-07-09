/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cz.muni.fi.crocs.EduHoc.Serial;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

/**
 *
 * @author LukeMcNemee
 */
public class SerialPortListener implements Runnable{

    private InputStream is;
    private File file;

    public SerialPortListener(InputStream is, String filename) {
        this.is = is;
        this.file = new File(filename);
    }

    public void streamToFile() throws  IOException {
        OutputStream os = new FileOutputStream(file);

        byte[] buffer = new byte[8 * 1024];
        int bytesRead;
        while ((bytesRead = is.read(buffer)) != -1) {
            os.write(buffer, 0, bytesRead);
        }
        is.close();
        os.close();        
    }

    @Override
    public void run() {
        try {
            streamToFile();
        } catch (IOException ex) {
            System.err.println("Stream to file " + file.getAbsolutePath() + " failed");
        }
    }

}

import "dotenv/config"

export async function loginController(req, res) {
     try {
    const { username, password } = req.body;
    

    
    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' }
    );
    
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Authentication failed' });
  }
}
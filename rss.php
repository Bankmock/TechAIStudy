<?php
// Set the content type to XML
header('Content-Type: application/rss+xml; charset=utf-8');

// Information about your website
$website_title = "TechAIStudy";
$website_link = "https://www.TechAIStudy.com";
$website_description = "Latest updates and articles on AI, technology, and study resources.";
$website_language = "en-us";

// Array of articles (You can replace this with database content)
$articles = [
    
    [
        'title' => 'image Tool and pdf generator',
        'link' => 'https://www.TechAIStudy.com/image-tool-and-pdf-generator.html',
        'description' => 'image Tool and pdf generator',
        'pubDate' => '2024-09-26',
        'guid' => 'https://www.TechAIStudy.com/image-tool-and-pdf-generator.html'
    ]
];

// Start RSS feed XML structure
echo '<?xml version="1.0" encoding="UTF-8"?>';
?>
<rss version="2.0">
  <channel>
    <title><?php echo $website_title; ?></title>
    <link><?php echo $website_link; ?></link>
    <description><?php echo $website_description; ?></description>
    <language><?php echo $website_language; ?></language>
    
    <?php foreach($articles as $article): ?>
    <item>
      <title><?php echo htmlspecialchars($article['title']); ?></title>
      <link><?php echo $article['link']; ?></link>
      <description><?php echo htmlspecialchars($article['description']); ?></description>
      <pubDate><?php echo $article['pubDate']; ?></pubDate>
      <guid><?php echo $article['guid']; ?></guid>
    </item>
    <?php endforeach; ?>
    
  </channel>
</rss>

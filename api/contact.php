<?php
header('Content-Type: application/json');

// Povol CORS pokud je to třeba (úprava podle vašich potřeb)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Povolena je pouze POST metoda']);
    exit;
}

// Získání dat z formuláře
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validace
$errors = [];

if (empty($name)) {
    $errors[] = 'Jméno je povinné';
}

if (empty($email)) {
    $errors[] = 'Email je povinný';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Neplatná emailová adresa';
}

if (empty($subject)) {
    $errors[] = 'Předmět je povinný';
}

if (empty($message)) {
    $errors[] = 'Zpráva je povinná';
}

// Pokud jsou nějaké chyby, vrať je
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// Zde by mělo následovat zpracování formuláře
// Například odeslání emailu, uložení do databáze, atd.

// Ukázka: uložení do souboru (pro testování)
$logData = [
    'date' => date('Y-m-d H:i:s'),
    'name' => $name,
    'email' => $email,
    'subject' => $subject,
    'message' => $message
];

// Adresář pro logy (vytvoří se pokud neexistuje)
$logDir = __DIR__ . '/../logs';
if (!is_dir($logDir)) {
    mkdir($logDir, 0755, true);
}

// Přidání záznamu do logu
$logFile = $logDir . '/contacts.log';
$logEntry = json_encode($logData, JSON_UNESCAPED_UNICODE) . "\n";
file_put_contents($logFile, $logEntry, FILE_APPEND);

// Poznámka: V produkci zde přidejte odesílání emailu
// mail($to, $subject, $message, $headers);

// Úspěšná odpověď
echo json_encode([
    'success' => true,
    'message' => 'Zpráva byla úspěšně odeslána'
]);

